import React from 'react'

export default function Dasboard() {
    return (
        <section className="w-full h-screen bg-linear-to-r from-[#002E6D] via-[#005ba3] to-[#0070d4] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D00D2D] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D00D2D] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 py-20  lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ab, inventore sapiente sit cumque cum quo molestiae ipsum saepe nobis facilis officiis at hic voluptate rem recusandae perspiciatis ratione repellat ut beatae perferendis odit suscipit aut. Sint vero soluta enim debitis deleniti aliquid voluptate eligendi, harum, tempora totam non atque molestias quos unde nulla iusto. Neque perferendis quia non deserunt sed alias blanditiis incidunt fuga sit, quo doloribus consequatur eos delectus cupiditate provident, culpa temporibus reprehenderit. Culpa dolores eius quae. Quaerat, accusantium sit in harum illo ab corporis ut vel, modi facere voluptatem commodi dicta, quas similique est dolorum quibusdam? Minus ipsum voluptatibus dolore a. Aspernatur debitis, doloremque ullam quibusdam excepturi deserunt aut itaque, vero praesentium deleniti doloribus porro hic nostrum eos aperiam cumque exercitationem. Veritatis aut quis quo sit at. Laudantium, possimus repellat ea eaque, placeat id reprehenderit nam non dolor libero minus aliquid culpa voluptatibus sequi asperiores voluptatum ullam necessitatibus ipsam? Asperiores natus ipsa veritatis laborum tempora neque, saepe distinctio perferendis assumenda odit iste nisi, error recusandae aut eos labore accusantium exercitationem impedit totam vitae voluptatibus est et quaerat! Blanditiis nostrum eius dolores exercitationem hic nulla repellendus enim veritatis ex cum, dolor saepe eaque autem perferendis labore neque?</p>
                </div>
            </div>
        </section>
    )
}
