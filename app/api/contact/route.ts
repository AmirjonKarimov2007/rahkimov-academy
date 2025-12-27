import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8269651271:AAE5px0CUeMltBTv4HczVPcLe0qmhGKuL5I"
const TELEGRAM_ADMIN_ID = "6532595419"

export async function POST(request: NextRequest) {
  console.log("[v0] Contact API called")
  try {
    const body = await request.json()
    console.log("[v0] Request body:", body)
    const { firstName, lastName, phone, telegram, phone2, message } = body

    // Validate required fields
    if (!firstName || !lastName || !phone) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json({ error: "Iltimos barcha majburiy maydonlarni to'ldiring" }, { status: 400 })
    }

    const telegramMessage = `
🆕 <b>Yangi so'rov!</b>

👤 <b>Ism:</b> ${firstName}
👤 <b>Familiya:</b> ${lastName}
📞 <b>Telefon:</b> ${phone}
${phone2 ? `📞 <b>Qo'shimcha telefon:</b> ${phone2}` : ""}
${telegram ? `💬 <b>Telegram:</b> ${telegram}` : ""}
${message ? `\n💬 <b>Xabar:</b>\n${message}` : ""}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}
    `.trim()

    console.log("[v0] Sending to Telegram...")

    // Send message to Telegram
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
    console.log("[v0] Telegram response:", telegramData)

    if (!telegramData.ok) {
      console.error("[v0] Telegram API error:", telegramData)
      return NextResponse.json(
        {
          success: false,
          error: "Xabar yuborishda xatolik yuz berdi",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Message sent successfully")
    return NextResponse.json(
      {
        success: true,
        message: "Ma'lumotlar muvaffaqiyatli yuborildi!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error sending message:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Server xatosi yuz berdi",
      },
      { status: 500 },
    )
  }
}
