import { MapPin, PhoneIncoming, Mail } from 'lucide-react';
import { donnees } from "./contactsInfos"
export const Contacts = () => {
    return (
        <div>
            <section className="w-full flex flex-col bg-[#002E6D] py-5 pb-5 gap-2 mt-9 rounded-t-2xl">
                <h3 className="mx-auto text-2xl text-white font-bold">Contacts</h3>
                <div class="flex flex-col w-full px-5 items-center gap-5 justify-center lg:flex-row">
                    {
                        donnees.map(({ id, Icon, nom, text1, text2 }) => {
                            return (
                                <div key={id} className="flex items-center w-full px-7 border border-blue-600 shadow-2xl py-7 mx-2 rounded-2xl gap-1 h-20 flec-col lg:w-1/4">

                                    <Icon size={30} color='#D00D2D' strokeWidth='3px' />
                                    <div className="w-80 pl-4 text-white">
                                        <p className="font-bold text-lg text-[#D00D2D] ">{nom}</p>
                                        <p className="font-light text-[14px]">{text1}</p>
                                        <p className="font-light text-[11px]">{text2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </section >
        </div >
    )
}
