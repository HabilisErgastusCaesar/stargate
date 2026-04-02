import { NextResponse } from "next/server";
import castData from '@/app/data/stargateCast.json' assert { type: "json" };

type castItem = {
    numberOfEpisodesSgOne: number ;
    numberOfEpisodesUniverse: number;
    yearsActive: string[];
    sgOneSeasonOne: string;
    sgOneSeasonTwo: string;
    sgOneSeasonThree: string;
    sgOneSeasonFor: string;
    sgOneSeasonFive: string;
    sgOneSeasonSix: string;
    sgOneSeasonSeven: string;
    sgOneSeasonEight: string;
    sgOneSeasonNine: string;
    sgOneSeasonTen: string;
    atlantisSeasonOne: string;
    atlantisSeasonTwo: string;
    atlantisSeasonThree: string;
    atlantisSeasonFor: string;
    atlantisSeasonFive: string;
    universeSeasonOne: string;
    universeSeasonTwo: string;
    sgOne: boolean;
    atlantis: boolean;
    universe: boolean;
    img: string;

  [key: string]: string | number | string[] | boolean | undefined;
};

const cast: castItem[] = castData

export async function GET(request: Request) {
    const url = new URL(request.url);
    const params = url.searchParams.get("data");
    if (!params) {
        return NextResponse.json([]);
    }
    const filtered = cast
    .filter((item) => item[params] === true);
    return NextResponse.json(filtered);
}