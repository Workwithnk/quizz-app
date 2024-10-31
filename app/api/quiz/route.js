import { Quiz } from "@/utils/Quize";
import { NextResponse } from "next/server";



export async function GET(req, res) {

  const quizeData = Quiz.quiz;
  try {
    return NextResponse.json({ status: 200, quiz: quizeData })
  } catch (e) {
    return NextResponse.json({ status: 400, error: `Something went wrong ${e} ` })
  }

} 