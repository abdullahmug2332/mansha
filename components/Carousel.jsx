"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
    {
        id: 1,
        title: "Precision in Every Step",
        content:
            "We apply continuous improvement principles to everything we do. Through lean manufacturing, data-driven quality control, and rigorous benchmarking, we ensure consistent, high performance.",
    },
    {
        id: 2,
        title: "Create to Evolve",
        content:
            "Innovation is structured into our development cycles. From automated workflows to next-gen material research, we attempt to stay ahead by designing smarter, faster solutions.",
    },
    {
        id: 3,
        title: "The Human Element",
        content:
            "Worker welfare is a non-negotiable. We invest in safe environments, fair compensation, and ongoing development. Human-centric systems build resilient teams and better outcomes.",
    },
];

export default function Carouselone() {
    return (
        <>
            <div className="w-full flex justify-center py-10">
                <Carousel opts={{ align: "start" }} className="w-[70%] md:w-full max-w-xl ">
                    <CarouselContent  >
                        {carouselData.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-full ">
                                <div className="p-4">
                                    <Card className="bg-[#EAF7FE] text-black shadow-lg">
                                        <CardContent className="flex flex-col gap-4 p-6">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-sm leading-6">{item.content}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}
