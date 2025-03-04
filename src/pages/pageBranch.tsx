import { MapPin, Phone } from "lucide-react"

export default function BranchesPage() {
  const branches = [
    {
      id: 1,
      name: "Hulk Gym - Chbar Ampov Branch",
      location: "Street 289, Toul Kork, Phnom Penh",
      contacts: ["096 888 1234", "012 999 4567"],
    },
    {
      id: 2,
      name: "Hulk Gym - BKK1 Branch",
      location: "Street 63, BKK1, Phnom Penh",
      contacts: ["097 777 8888", "015 123 4567"],
    },
    {
      id: 3,
      name: "Hulk Gym - Toul Kork Branch",
      location: "Street 315, Toul Kork, Phnom Penh",
      contacts: ["010 444 5555", "011 222 3333"],
    },
  ]

  return (
    <div className="p-4 max-w-lg mx-auto bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Gym Branches & Contacts
      </h2>

      <div className="space-y-4">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center space-x-4"
          >
            <img
              src="/gym-image.jpg" // Replace with actual image URL
              alt="Gym"
              className="w-14 h-14 rounded-full object-cover border border-gray-300"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-white">{branch.name}</h3>
              <div className="flex items-center text-white text-sm mt-1">
                <MapPin size={14} className="mr-1 text-white" />
                <span>{branch.location}</span>
              </div>
              <div className="mt-2 space-y-1">
                {branch.contacts.map((number, i) => (
                  <div key={i} className="flex items-center text-white text-sm">
                    <Phone size={14} className="mr-2 text-green-500" />
                    <span>{number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-6">
        <iframe
          title="Gym Location Map"
          className="w-full h-60 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4883.132918774746!2d104.8921661760141!3d11.568271568928217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510fa0c2b317%3A0x845fba5a6f9e9aab!2sToul%20Kork%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1709479382163!5m2!1sen!2skh"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
