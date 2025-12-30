import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8269651271:AAE5px0CUeMltBTv4HczVPcLe0qmhGKuL5I"
const TELEGRAM_ADMIN_ID = "1612270615"

export async function POST(request: Request) {
  console.log("[SERVER][v0] Consultation API called")

  try {
    const body = await request.json()
    console.log("[SERVER][v0] Request body:", body)

    const { firstName, lastName, phone, course, message } = body

    if (!firstName || !lastName || !phone || !course) {
      console.log("[SERVER][v0] Missing required fields")
      return NextResponse.json({ success: false, error: "Barcha majburiy maydonlarni to'ldiring" }, { status: 400 })
    }

    // Format course name
    const courseNames: Record<string, string> = {
      "online-beginner": "Online - Boshlang'ich daraja",
      "online-intermediate": "Online - O'rta daraja",
      "online-advanced": "Online - Yuqori daraja",
      "offline-beginner": "Offline - Boshlang'ich daraja",
      "offline-intermediate": "Offline - O'rta daraja",
      "offline-advanced": "Offline - Yuqori daraja",
      "not-sure": "Hali aniq emas",
    }

    const courseName = courseNames[course] || course

    // Format message for Telegram
    const telegramMessage = `🎓 <b>Yangi konsultatsiya so'rovi!</b>

👤 <b>Ism:</b> ${firstName}
👤 <b>Familiya:</b> ${lastName}
📞 <b>Telefon:</b> ${phone}
📚 <b>Kurs:</b> ${courseName}

${message ? `💬 <b>Xabar:</b>\n${message}\n` : ""}
⏰ <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`

    // Send to Telegram
    console.log("[SERVER][v0] Sending to Telegram...")
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_ADMIN_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    const telegramData = await telegramResponse.json()
    console.log("[SERVER][v0] Telegram response:", telegramData)

    if (!telegramData.ok) {
      console.error("[SERVER][v0] Telegram error:", telegramData)
      return NextResponse.json({ success: false, error: "Xabar yuborishda xatolik yuz berdi" }, { status: 500 })
    }

    console.log("[SERVER][v0] Message sent successfully")
    return NextResponse.json({
      success: true,
      message: "Ariza muvaffaqiyatli yuborildi!",
    })
  } catch (error) {
    console.error("[SERVER][v0] Error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi yuz berdi" }, { status: 500 })
  }
}
