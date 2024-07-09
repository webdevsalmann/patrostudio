"use client"
import SparkleText from "@/components/helper/SparkleText";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/datas/services";
import FadeUp from "@/components/animaitons/FadeUp";

export default function Service() {
    return (
        <section id="service">
            <div className="section-wrapper">
                <FadeUp>
                    <h2><span className=""><SparkleText text="Services" /></span> I Offer</h2>
                </FadeUp>
                <div className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => {
                        return (
                            <FadeUp key={i + "HomeServiceCard"} >
                                <ServiceCard data={item} />
                            </FadeUp>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}