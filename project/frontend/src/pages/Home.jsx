import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import { Carousel } from 'react-responsive-carousel'; // Assuming you're using this library
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import slider1 from '../images/slide1.jpg';
import slider2 from '../images/slide2.jpg';
import slider3 from '../images/slide3.jpg';
import icon from '../images/shop-icon.png'
const Home = () => {
    const { keyword } = useParams();
    const { data, isLoading, isError } = useGetProductsQuery({ keyword });

    return (
        <>
            {/* Logo */}
            <a href="/">
                <div className="flex items-center justify-center space-x-2 text-2xl font-medium">
                    <span>
                    <img src={icon} alt="AI Logo" width="64" height="64" className="w-16" />
                    </span>
                    <span className="text-white">Sair Rentals</span>
                </div>
            </a>

            {/* Full-Width and Full-Height Carousel */}
            <div className="h-screen mt-4 w-full flex justify-center items-center dark:bg-black-800">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    className="w-full h-full" // Full width and height for the carousel
                >
                    <div className="w-full h-full">
                        <img src={slider1} alt="Shop 1" className="object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-full">
                        <img src={slider2} alt="Shop 2" className="object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-full">
                        <img src={slider3} alt="Shop 3" className="object-cover h-full w-full" />
                    </div>
                </Carousel>
            </div>

            {/* Header */}
            {!keyword ? <Header /> : null}
            {isLoading ? (
                <Loader />
            ) : isError ? (
                <Message variant="danger">
                    {isError?.data.message || isError.error}
                </Message>
            ) : (
                <>
                    {/* Special Products Section */}
                    <div className="flex justify-between items-center">
                        <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
                            Special Products
                        </h1>

                        <Link
                            to="/shop"
                            className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
                        >
                            Shop
                        </Link>
                    </div>

                    <div>
                        <div className="flex justify-center flex-wrap mt-[2rem]">
                            {data.products.map((product) => (
                                <div key={product._id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
               <div className="flex h-screen justify-center items-center dark:bg-black-800">
                <div className="text-center max-w-6xl mx-10">
                    <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">Fast &amp; Best Quality</p>
                    <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
                        Deals Await You
                    </h1>
                    <div>
                        <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
                            Discover the ultimate shopping experience with unbeatable deals and exceptional service at Sair Rentals  where your satisfaction is our top priority!
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
                        <a
                            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px "
                            href="/shop">Explore More
                        </a>
                        <a className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
                            href="/cart">Add to Cart
                        </a>
                    </div>
                </div>
            </div>


                    {/* Footer */}
                    <footer className="bg-{#0f0f10}">
                        <div className="container mx-auto p-0 md:p-8 xl:px-0">
                            <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                                    <div className="space-y-4">
                                        <div>
                                            <a href="/">
                                                <div className="flex items-center space-x-2 text-2xl font-medium">
                                                    <span>
                                                        <img src={icon} alt="AI Logo"
                                                            width="64" height="64" className="w-16" />
                                                    </span>
                                                    <span className="text-white">Sair Rentals</span>
                                                </div>

                                            </a>
                                        </div>
                                        <div className="max-w-md pr-16 text-md text-gray-200">Enhance productivity and
                                            efficiency with renting services all over world and beneficial for women .
                                        </div>
                                        <div className="flex space-x-2">
                                            <a href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                                                <span className="sr-only">Linkedin</span><svg fill="currentColor" viewBox="0 0 24 24"
                                                    className="h-6 w-6" aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                                                <span className="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24"
                                                    className="h-6 w-6" aria-hidden="true">
                                                    <path
                                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                        <div className="md:grid md:grid-cols-2 md:gap-8">
                                            <div>
                                                <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                                                <ul role="list" className="mt-6 space-y-4">
                                                    <li>
                                                        <a href="/aiplatform"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">AI Platform
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/aialgorithms"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">AI Algorithms
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/industryapplications"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Industry
                                                            Applications
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-10 md:mt-0">
                                                <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                                                <ul role="list" className="mt-6 space-y-4">
                                                    <li>
                                                        <a href="/predictiveanalysis"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Predictive
                                                            Analysis
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/customerexperience"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Customer
                                                            Experience
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/automation"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Automation
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="md:grid md:grid-cols-2 md:gap-8">
                                            <div>
                                                <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                                                <ul role="list" className="mt-6 space-y-4">
                                                    <li>
                                                        <a href="/pricing"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Pricing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">Blog
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/casestudies"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Case Studies
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">Terms
                                                            of Service
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/privacy"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Privacy Policy
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-10 md:mt-0">
                                                <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                                                <ul role="list" className="mt-6 space-y-4">
                                                    <li>
                                                        <a href="/aboutus"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">About Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/careers"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Careers
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/contactus"
                                                            className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact Us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                                    <div className="text-md text-center text-white">
                                        Copyright © 2024 . Created
                                        by Sair Rentals

                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </>
            )}
        </>
    );
};

export default Home;
