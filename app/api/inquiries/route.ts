import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) return NextResponse.json({ error: "Thiếu thông tin bắt buộc" }, { status: 400 });
    const inquiry = await prisma.inquiry.create({ data: { branch: body.branch || "general", name: body.name, company: body.company || null, phone: body.phone, email: body.email || null, message: body.message || null } });
    return NextResponse.json({ id: inquiry.id, ok: true });
  } catch {
    return NextResponse.json({ error: "Không thể lưu yêu cầu lúc này" }, { status: 500 });
  }
}
