import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-navy-blue text-white text-center justify-baseline">
            <h1 className="text-2xl font-bold p-8 tracking-wide"><span>Event</span> <span className="text-primary ml-2">Hive</span></h1>
            
            <form className="">
                <input className="px-8 py-2 rounded-[3px] justify-between bg-white text-[10px] text-black" type="email" placeholder="Enter your email" name="email"  />
                <button className=" text-[10px] bg-primary px-6 py-2 rounded-[3px] ml-2" type="submit" >Subscribe</button>
            </form>
            <div className="flex items-center justify-center m-5 gap-6 text-[12px]">
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Get in touch</span>
                <span>FAQ</span>
            </div>
            <hr className="ml-4 mr-6 p-4"/>
            <div className="flex justify-between p-2">
                <div className="text-[8px] space-x-4 ">
                    <button className="bg-primary px-2 py-1 rounded-3px]">English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex space-x-2 mt-1">
                     <Linkedin className="size-4"/>
                     <Instagram className="size-4" />
                     <Facebook className="size-4" />
                </div>
                <p className="text-[10px] items-center">Non Copyrighted© 2025 Upload by EventHive</p>
            </div>
        </footer>
    )
}

