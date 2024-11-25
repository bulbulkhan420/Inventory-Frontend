"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Page from "./Catagorys/Page";
interface inputtype {
    name: string;
}
export default function Home() {
    return (
        <div>
            <Page />
        </div>
    );
}
