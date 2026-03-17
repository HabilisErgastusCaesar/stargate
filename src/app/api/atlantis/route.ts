import { NextResponse } from "next/server";
import stargateData from '@/app/data/stargateSgOne.json' assert { type: 'json' };

export async function GET(request: Request) {
    const url = new URL(request.url);
    const params = url.searchParams.get("data");
    const filtered = stargateData
    .filter((item) => item.id.includes(`Season${params}Episode`));
    return NextResponse.json(filtered);
}