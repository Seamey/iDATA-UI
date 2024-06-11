
import Herocomponent from "@/components/(user)/header/hero/Herocomponent";
import Image from "next/image";
import { Card } from "flowbite-react";


export default function Home() {
    return (
        <main>
            <Herocomponent />
            <section className=" bg-backgroundColor dark:bg-black h-auto w-full grid justify-center">
                <div className="flex items-center">
                    <div className="flex justify-center items-center w-full">
                        <Image
                            width={900}
                            height={100}
                            src="/seamey/banner.png"
                            alt="Json Image"
                            className="w-[300px] md:w-9/12 mx-auto sm:p-4"
                        />
                    </div>
                </div>
                {/* Revolution */}
                <section className="w-11/12 md:w-[90%] mx-auto md:px-3.5 py-10 border border-gray-300 rounded-xl ">
                    <h1 className="md:mt-10 font-medium text-center text-primaryColor text-h20 md:text-h34">Revolutionize
                        Your Website Design</h1>
                    <h1 className="font-meduim text-h22 md:text-h34 text-center text-secondaryColor ">Workflow </h1>
                    <p className="text-gray-400 font-normal pt-5 md:pt-10 w-full md:w-4/6 mx-auto text-center text-h12 md:text-h16 ">Explore
                        our essential tools for seamless website planning and design. Elevate your workflow with
                        intuitive features and powerful capabilities.</p>
                    <div className=" pt-5 md:pt-10 mx-auto py-5 px-5 items-center">
                        <div className="grid lg:grid-cols-3 gap-y-4 gap-4">
                            <Card className="w-full">
                                <h5 className="text-h20 md:text-h28 text-primaryColor dark:text-white">
                                    Generate API
                                </h5>
                                <p className="font-normal text-h14 md:text-h16 text-gray-400 dark:text-gray-200 ">
                                    Revolutionize your design workflow with our visual sitemap planner. Effortlessly
                                    create clear structures and customize page templates.
                                </p>
                            </Card>
                            <Card className="w-full ">
                                <h5 className="text-h20 md:text-h28 text-primaryColor dark:text-white">
                                    Instant RESTFUL API
                                </h5>
                                <p className="font-normal text-h16 md:text-h18 text-gray-400 dark:text-gray-200 ">Streamline
                                    your design process with ourwireframing tool. Create clear and preciselayouts,
                                    bringing your ideas to life seamlessly.</p>
                            </Card>
                            <Card className="w-full">
                                <h5 className="text-h20 md:text-[26px] text-primaryColor dark:text-white">
                                    Environment Testing
                                </h5>
                                <p className="font-normal text-14 md:text-h16 text-gray-400 dark:text-gray-200 ">
                                    Visualize your ideas with our whiteboard tool. Collaborate in real-time and bring
                                    concepts to life with ease. </p>
                            </Card>
                        </div>
                    </div>
                </section>
                {/* website planning */}
                <section className="w-10/12 mx-auto rounded-xl mt-10">
                    <h1 className="md:mt-10 font-medium text-center text-primaryColor text-h22 md:text-h34">Your Website
                        Planning</h1>
                    <h1 className="font-meduim text-h22 md:text-h34 text-center text-secondaryColor ">Solution </h1>
                    <p className="text-nearbalack font-normal pt-5 mx-auto text-center text-h12 md:text-h16 justify-center">Unleash
                        creativity effortlessly with our dynamic whiteboard. Collaborate seamlessly and
                        visualize ideas in real-time with intuitive tools.</p>

                </section>
                {/* Feature */}
                <div className="container mx-auto px-8 md:px-10 ">
                    {/* section 1 */}
                    <section className="flex flex-wrap md:flex-cols-2 items-center justify-center w-full mx-auto pt-8">
                        <div className="md:w-1/2 justify-between">
                            <div>
                                <h1 className="my-6 font-semibold text-h18 text-primaryColor md:text-h20">Generate API
                                    from URL</h1>
                                <p className="text-nearblack font-normal text-h14 md:text-h18 2xl:w-3/4">Craft structured sitemaps
                                    effortlessly, simplifying navigation and enhancing user experience for your website
                                    projects.</p>
                            </div>
                            <div className="flex my-4 justify-between gap-4 w-full lg:w-4/6 2xl:w-3/6">
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 px-2 md:px-5 text-primaryColor border border-primaryColor hover:text-white hover:bg-primaryColor rounded-full">Get
                                    Started
                                </button>
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 px-2 md:px-5 border border-primaryColor text-white bg-primaryColor hover:text-primaryColor hover:bg-white rounded-full">Read
                                    Doc
                                </button>
                            </div>

                        </div>
                        <div className="md:w-1/2 items-center">
                            <Image width={300}
                                height={100}
                                src={'/seamey/UI-UX team.png'}
                                alt="UI-UX team image" />
                        </div>
                    </section>
                    {/* section 2 */}
                    <section
                        className="flex flex-wrap-reverse md:flex-nowrap md:flex-cols-2 w-full justify-between mx-auto gap-3 items-center pt-8">
                        <div className="md:w-1/2 items-center">
                            <Image width={300}
                                height={100}
                                src={'/seamey/diagram.png'}
                                alt="Diagram image" />
                        </div>
                        <div className="md:w-1/2 justify-center">
                            <h1 className="my-6 font-semibold text-h18 text-primaryColor md:text-h20">Generate API from
                                Schema</h1>
                            <p className="text-nearblack font-normal text-h14 md:text-h18 2xl:w-full">Effortlessly collaborate and
                                brainstorm with our versatile whiteboard tool, fostering creativity and teamwork for
                                your projects. </p>
                            <div className="flex my-4 justify-between gap-4 w-full lg:w-4/6 2xl:w-3/6">
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 md:px-5 px-2 text-primaryColor border border-primaryColor hover:text-white hover:bg-primaryColor rounded-full">Get
                                    Started
                                </button>
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 px-2 md:px-5 border border-primaryColor text-white bg-primaryColor hover:text-primaryColor hover:bg-white rounded-full">Read
                                    Doc
                                </button>
                            </div>
                        </div>

                    </section>
                    {/* section 3 */}
                    <section
                        className="flex flex-wrap md:flex-nowrap md:flex-cols-2 w-full justify-between mx-auto gap-3 items-center pt-8">
                        <div className="md:w-1/2 justify-center">
                            <h1 className="my-6 font-semibold text-h18 text-primaryColor md:text-h20">Generate API by
                                import files</h1>
                            <p className="text-nearblack font-normal text-h14 md:text-h18 2xl:w-3/4">Craft streamlined layouts and
                                visualize concepts effectively with our wireframing tool, enhancing your design process
                                effortlessly.</p>
                            <div className="flex my-4 justify-between gap-4 w-full lg:w-4/6 2xl:w-3/6">
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 md:px-5 px-2 text-primaryColor border border-primaryColor hover:text-white hover:bg-primaryColor rounded-full">Get
                                    Started
                                </button>
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 md:px-5 px-2 border border-primaryColor text-white bg-primaryColor hover:text-primaryColor hover:bg-white rounded-full">Read
                                    Doc
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 items-center">
                            <Image width={300}
                                height={100}
                                src={'/seamey/Generate files.png'}
                                alt="Files image" />
                        </div>
                    </section>
                    {/* section 4 */}
                    <section
                        className=" flex flex-wrap-reverse md:flex-nowrap md:flex-cols-2  w-full justify-between mx-auto gap-3 items-center pt-8">
                        <div className="md:w-1/2 items-center">
                            <Image width={300}
                                height={100}
                                src={'/seamey/Forms.png'}
                                alt="Form image" />
                        </div>
                        <div className="md:w-1/2 justify-center">
                            <h1 className="my-6 font-semibold text-h18 text-primaryColor md:text-h22">Generate API by
                                input form</h1>
                            <p className="text-nearblack font-normal text-h14 md:text-h18 2xl:w-full">Craft streamlined layouts and
                                visualize concepts effectively with our wireframing tool, enhancing your design process
                                effortlessly.</p>
                            <div className="flex my-4 justify-between gap-4 w-full lg:w-4/6 2xl:w-3/6">
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 md:px-5 px-2 text-primaryColor border border-primaryColor hover:text-white hover:bg-primaryColor rounded-full">Get
                                    Started
                                </button>
                                <button
                                    className="w-full h-auto md:w-[140px] md:h-[40px] text-h16 py-2 md:px-5 px-2 border border-primaryColor text-white bg-primaryColor hover:text-primaryColor hover:bg-white rounded-full">Read
                                    Doc
                                </button>
                            </div>
                        </div>

                    </section>
                </div>
                {/* Client praise section */}

                <section className=" w-11/12 flex flex-wrap md:flex-nowrap items-center justify-center py-12 bg-white">
                    <div className="w-11/12 md:w-1/2">
                        <p className="md:ml-20 text-white text-h12 border bg-secondaryColor rounded-full w-[107px] text-center">Client
                            Praise</p>
                        <h1 className="md:w-42 md:ml-20 text-h28 md:text-h34 text-primaryColor mr-20">What are they
                            saying about us?</h1>
                    </div>
                    <div className="w-11/12 md:w-1/2 md:ml-10">
                        <div className="flex items-center space-x-4 mb-4">
                            <Image width={100} height={100} src={"/seamey/client1.jpg"} alt="Client 1"
                                className="w-10 h-10 rounded-full" />
                            <Image width={100} height={100} src={"/seamey/client2.jpg"} alt="Client 2"
                                className="w-10 h-10 rounded-full" />
                            <Image width={100} height={100} src={"/seamey/client3.jpg"} alt="Client 3"
                                className="w-10 h-10 rounded-full" />
                            <Image width={100} height={100} src={"/seamey/client4.jpg"} alt="Client 4"
                                className="w-10 h-10 rounded-full" />
                            <Image width={100} height={100} src={"/seamey/client5.jpg"} alt="Client 5"
                                className="w-10 h-10 rounded-full" />
                        </div>
                        <p className="text-gray-500 ">Join our growing community of 17k+ who have converted to
                            Flowboard</p>
                    </div>

                </section>

                {/* testimonials */}
                {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            position={testimonial.position}
            company={testimonial.company}
            text={testimonial.text}
            imageUrl={testimonial.imageUrl}
          />
        ))}
        </div> */}

            </section>

        </main>
    );
}
