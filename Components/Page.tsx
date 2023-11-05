import { PEOPLE_URL } from "@/Constants";
import Image from "next/image";

interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="">
                        <Image
                            src="/logo.png"
                            alt="map"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {PEOPLE_URL.map((url) => (
                            <Image
                                className="inline-block h-10 w-10 rounded-full"
                                src={url}
                                key={url}
                                alt="person"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
                </div>
            </div>
        </div>
    )
}

const Page = () => {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <CampSite
                    backgroundImage="bg-bg-img-1"
                    title="car inside peak"
                    subtitle="fresh envirnoment"
                    peopleJoined="69+ verified"
                />
                <CampSite
                    backgroundImage="bg-bg-img-2"
                    title="New edge technology"
                    subtitle="get ready for the ride"
                    peopleJoined="69+ verified"
                />
            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Proper maintanace</strong> car fresh envirnoment
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        get your ride now with car-hub clean and sustainable envirnoment fresh air , biggner friendly of not who cares i dont know but i am sure of that i don't funking care lol of may be not or may be i am filling the senetence fuck off bitch!!
                    </p>
                    <Image
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    )
}

export default Page