import React, { useState, useRef } from 'react';
import { Inter } from 'next/font/google';
import { X, Upload, ChevronDown, Check, Linkedin, Twitter, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
    availableJobs: { id: number; title: string }[];
}

const countryCodes = [
    { code: "AF", name: "Afghanistan", dial: "+93" },
    { code: "AL", name: "Albania", dial: "+355" },
    { code: "DZ", name: "Algeria", dial: "+213" },
    { code: "AS", name: "American Samoa", dial: "+1-684" },
    { code: "AD", name: "Andorra", dial: "+376" },
    { code: "AO", name: "Angola", dial: "+244" },
    { code: "AI", name: "Anguilla", dial: "+1-264" },
    { code: "AQ", name: "Antarctica", dial: "+672" },
    { code: "AG", name: "Antigua and Barbuda", dial: "+1-268" },
    { code: "AR", name: "Argentina", dial: "+54" },
    { code: "AM", name: "Armenia", dial: "+374" },
    { code: "AW", name: "Aruba", dial: "+297" },
    { code: "AU", name: "Australia", dial: "+61" },
    { code: "AT", name: "Austria", dial: "+43" },
    { code: "AZ", name: "Azerbaijan", dial: "+994" },
    { code: "BS", name: "Bahamas", dial: "+1-242" },
    { code: "BH", name: "Bahrain", dial: "+973" },
    { code: "BD", name: "Bangladesh", dial: "+880" },
    { code: "BB", name: "Barbados", dial: "+1-246" },
    { code: "BY", name: "Belarus", dial: "+375" },
    { code: "BE", name: "Belgium", dial: "+32" },
    { code: "BZ", name: "Belize", dial: "+501" },
    { code: "BJ", name: "Benin", dial: "+229" },
    { code: "BM", name: "Bermuda", dial: "+1-441" },
    { code: "BT", name: "Bhutan", dial: "+975" },
    { code: "BO", name: "Bolivia", dial: "+591" },
    { code: "BA", name: "Bosnia and Herzegovina", dial: "+387" },
    { code: "BW", name: "Botswana", dial: "+267" },
    { code: "BR", name: "Brazil", dial: "+55" },
    { code: "IO", name: "British Indian Ocean Territory", dial: "+246" },
    { code: "VG", name: "British Virgin Islands", dial: "+1-284" },
    { code: "BN", name: "Brunei", dial: "+673" },
    { code: "BG", name: "Bulgaria", dial: "+359" },
    { code: "BF", name: "Burkina Faso", dial: "+226" },
    { code: "BI", name: "Burundi", dial: "+257" },
    { code: "KH", name: "Cambodia", dial: "+855" },
    { code: "CM", name: "Cameroon", dial: "+237" },
    { code: "CA", name: "Canada", dial: "+1" },
    { code: "CV", name: "Cape Verde", dial: "+238" },
    { code: "KY", name: "Cayman Islands", dial: "+1-345" },
    { code: "CF", name: "Central African Republic", dial: "+236" },
    { code: "TD", name: "Chad", dial: "+235" },
    { code: "CL", name: "Chile", dial: "+56" },
    { code: "CN", name: "China", dial: "+86" },
    { code: "CX", name: "Christmas Island", dial: "+61" },
    { code: "CC", name: "Cocos Islands", dial: "+61" },
    { code: "CO", name: "Colombia", dial: "+57" },
    { code: "KM", name: "Comoros", dial: "+269" },
    { code: "CK", name: "Cook Islands", dial: "+682" },
    { code: "CR", name: "Costa Rica", dial: "+506" },
    { code: "HR", name: "Croatia", dial: "+385" },
    { code: "CU", name: "Cuba", dial: "+53" },
    { code: "CW", name: "Curacao", dial: "+599" },
    { code: "CY", name: "Cyprus", dial: "+357" },
    { code: "CZ", name: "Czech Republic", dial: "+420" },
    { code: "CD", name: "Democratic Republic of the Congo", dial: "+243" },
    { code: "DK", name: "Denmark", dial: "+45" },
    { code: "DJ", name: "Djibouti", dial: "+253" },
    { code: "DM", name: "Dominica", dial: "+1-767" },
    { code: "DO", name: "Dominican Republic", dial: "+1-809" },
    { code: "TL", name: "East Timor", dial: "+670" },
    { code: "EC", name: "Ecuador", dial: "+593" },
    { code: "EG", name: "Egypt", dial: "+20" },
    { code: "SV", name: "El Salvador", dial: "+503" },
    { code: "GQ", name: "Equatorial Guinea", dial: "+240" },
    { code: "ER", name: "Eritrea", dial: "+291" },
    { code: "EE", name: "Estonia", dial: "+372" },
    { code: "ET", name: "Ethiopia", dial: "+251" },
    { code: "FK", name: "Falkland Islands", dial: "+500" },
    { code: "FO", name: "Faroe Islands", dial: "+298" },
    { code: "FJ", name: "Fiji", dial: "+679" },
    { code: "FI", name: "Finland", dial: "+358" },
    { code: "FR", name: "France", dial: "+33" },
    { code: "PF", name: "French Polynesia", dial: "+689" },
    { code: "GA", name: "Gabon", dial: "+241" },
    { code: "GM", name: "Gambia", dial: "+220" },
    { code: "GE", name: "Georgia", dial: "+995" },
    { code: "DE", name: "Germany", dial: "+49" },
    { code: "GH", name: "Ghana", dial: "+233" },
    { code: "GI", name: "Gibraltar", dial: "+350" },
    { code: "GR", name: "Greece", dial: "+30" },
    { code: "GL", name: "Greenland", dial: "+299" },
    { code: "GD", name: "Grenada", dial: "+1-473" },
    { code: "GU", name: "Guam", dial: "+1-671" },
    { code: "GT", name: "Guatemala", dial: "+502" },
    { code: "GG", name: "Guernsey", dial: "+44-1481" },
    { code: "GN", name: "Guinea", dial: "+224" },
    { code: "GW", name: "Guinea-Bissau", dial: "+245" },
    { code: "GY", name: "Guyana", dial: "+592" },
    { code: "HT", name: "Haiti", dial: "+509" },
    { code: "HN", name: "Honduras", dial: "+504" },
    { code: "HK", name: "Hong Kong", dial: "+852" },
    { code: "HU", name: "Hungary", dial: "+36" },
    { code: "IS", name: "Iceland", dial: "+354" },
    { code: "IN", name: "India", dial: "+91" },
    { code: "ID", name: "Indonesia", dial: "+62" },
    { code: "IR", name: "Iran", dial: "+98" },
    { code: "IQ", name: "Iraq", dial: "+964" },
    { code: "IE", name: "Ireland", dial: "+353" },
    { code: "IM", name: "Isle of Man", dial: "+44-1624" },
    { code: "IL", name: "Israel", dial: "+972" },
    { code: "IT", name: "Italy", dial: "+39" },
    { code: "CI", name: "Ivory Coast", dial: "+225" },
    { code: "JM", name: "Jamaica", dial: "+1-876" },
    { code: "JP", name: "Japan", dial: "+81" },
    { code: "JE", name: "Jersey", dial: "+44-1534" },
    { code: "JO", name: "Jordan", dial: "+962" },
    { code: "KZ", name: "Kazakhstan", dial: "+7" },
    { code: "KE", name: "Kenya", dial: "+254" },
    { code: "KI", name: "Kiribati", dial: "+686" },
    { code: "XK", name: "Kosovo", dial: "+383" },
    { code: "KW", name: "Kuwait", dial: "+965" },
    { code: "KG", name: "Kyrgyzstan", dial: "+996" },
    { code: "LA", name: "Laos", dial: "+856" },
    { code: "LV", name: "Latvia", dial: "+371" },
    { code: "LB", name: "Lebanon", dial: "+961" },
    { code: "LS", name: "Lesotho", dial: "+266" },
    { code: "LR", name: "Liberia", dial: "+231" },
    { code: "LY", name: "Libya", dial: "+218" },
    { code: "LI", name: "Liechtenstein", dial: "+423" },
    { code: "LT", name: "Lithuania", dial: "+370" },
    { code: "LU", name: "Luxembourg", dial: "+352" },
    { code: "MO", name: "Macau", dial: "+853" },
    { code: "MK", name: "Macedonia", dial: "+389" },
    { code: "MG", name: "Madagascar", dial: "+261" },
    { code: "MW", name: "Malawi", dial: "+265" },
    { code: "MY", name: "Malaysia", dial: "+60" },
    { code: "MV", name: "Maldives", dial: "+960" },
    { code: "ML", name: "Mali", dial: "+223" },
    { code: "MT", name: "Malta", dial: "+356" },
    { code: "MH", name: "Marshall Islands", dial: "+692" },
    { code: "MR", name: "Mauritania", dial: "+222" },
    { code: "MU", name: "Mauritius", dial: "+230" },
    { code: "YT", name: "Mayotte", dial: "+262" },
    { code: "MX", name: "Mexico", dial: "+52" },
    { code: "FM", name: "Micronesia", dial: "+691" },
    { code: "MD", name: "Moldova", dial: "+373" },
    { code: "MC", name: "Monaco", dial: "+377" },
    { code: "MN", name: "Mongolia", dial: "+976" },
    { code: "ME", name: "Montenegro", dial: "+382" },
    { code: "MS", name: "Montserrat", dial: "+1-664" },
    { code: "MA", name: "Morocco", dial: "+212" },
    { code: "MZ", name: "Mozambique", dial: "+258" },
    { code: "MM", name: "Myanmar", dial: "+95" },
    { code: "NA", name: "Namibia", dial: "+264" },
    { code: "NR", name: "Nauru", dial: "+674" },
    { code: "NP", name: "Nepal", dial: "+977" },
    { code: "NL", name: "Netherlands", dial: "+31" },
    { code: "AN", name: "Netherlands Antilles", dial: "+599" },
    { code: "NC", name: "New Caledonia", dial: "+687" },
    { code: "NZ", name: "New Zealand", dial: "+64" },
    { code: "NI", name: "Nicaragua", dial: "+505" },
    { code: "NE", name: "Niger", dial: "+227" },
    { code: "NG", name: "Nigeria", dial: "+234" },
    { code: "NU", name: "Niue", dial: "+683" },
    { code: "KP", name: "North Korea", dial: "+850" },
    { code: "MP", name: "Northern Mariana Islands", dial: "+1-670" },
    { code: "NO", name: "Norway", dial: "+47" },
    { code: "OM", name: "Oman", dial: "+968" },
    { code: "PK", name: "Pakistan", dial: "+92" },
    { code: "PW", name: "Palau", dial: "+680" },
    { code: "PS", name: "Palestine", dial: "+970" },
    { code: "PA", name: "Panama", dial: "+507" },
    { code: "PG", name: "Papua New Guinea", dial: "+675" },
    { code: "PY", name: "Paraguay", dial: "+595" },
    { code: "PE", name: "Peru", dial: "+51" },
    { code: "PH", name: "Philippines", dial: "+63" },
    { code: "PN", name: "Pitcairn", dial: "+64" },
    { code: "PL", name: "Poland", dial: "+48" },
    { code: "PT", name: "Portugal", dial: "+351" },
    { code: "PR", name: "Puerto Rico", dial: "+1-787" },
    { code: "QA", name: "Qatar", dial: "+974" },
    { code: "CG", name: "Republic of the Congo", dial: "+242" },
    { code: "RE", name: "Reunion", dial: "+262" },
    { code: "RO", name: "Romania", dial: "+40" },
    { code: "RU", name: "Russia", dial: "+7" },
    { code: "RW", name: "Rwanda", dial: "+250" },
    { code: "BL", name: "Saint Barthelemy", dial: "+590" },
    { code: "SH", name: "Saint Helena", dial: "+290" },
    { code: "KN", name: "Saint Kitts and Nevis", dial: "+1-869" },
    { code: "LC", name: "Saint Lucia", dial: "+1-758" },
    { code: "MF", name: "Saint Martin", dial: "+590" },
    { code: "PM", name: "Saint Pierre and Miquelon", dial: "+508" },
    { code: "VC", name: "Saint Vincent and the Grenadines", dial: "+1-784" },
    { code: "WS", name: "Samoa", dial: "+685" },
    { code: "SM", name: "San Marino", dial: "+378" },
    { code: "ST", name: "Sao Tome and Principe", dial: "+239" },
    { code: "SA", name: "Saudi Arabia", dial: "+966" },
    { code: "SN", name: "Senegal", dial: "+221" },
    { code: "RS", name: "Serbia", dial: "+381" },
    { code: "SC", name: "Seychelles", dial: "+248" },
    { code: "SL", name: "Sierra Leone", dial: "+232" },
    { code: "SG", name: "Singapore", dial: "+65" },
    { code: "SX", name: "Sint Maarten", dial: "+1-721" },
    { code: "SK", name: "Slovakia", dial: "+421" },
    { code: "SI", name: "Slovenia", dial: "+386" },
    { code: "SB", name: "Solomon Islands", dial: "+677" },
    { code: "SO", name: "Somalia", dial: "+252" },
    { code: "ZA", name: "South Africa", dial: "+27" },
    { code: "KR", name: "South Korea", dial: "+82" },
    { code: "SS", name: "South Sudan", dial: "+211" },
    { code: "ES", name: "Spain", dial: "+34" },
    { code: "LK", name: "Sri Lanka", dial: "+94" },
    { code: "SD", name: "Sudan", dial: "+249" },
    { code: "SR", name: "Suriname", dial: "+597" },
    { code: "SJ", name: "Svalbard and Jan Mayen", dial: "+47" },
    { code: "SZ", name: "Swaziland", dial: "+268" },
    { code: "SE", name: "Sweden", dial: "+46" },
    { code: "CH", name: "Switzerland", dial: "+41" },
    { code: "SY", name: "Syria", dial: "+963" },
    { code: "TW", name: "Taiwan", dial: "+886" },
    { code: "TJ", name: "Tajikistan", dial: "+992" },
    { code: "TZ", name: "Tanzania", dial: "+255" },
    { code: "TH", name: "Thailand", dial: "+66" },
    { code: "TG", name: "Togo", dial: "+228" },
    { code: "TK", name: "Tokelau", dial: "+690" },
    { code: "TO", name: "Tonga", dial: "+676" },
    { code: "TT", name: "Trinidad and Tobago", dial: "+1-868" },
    { code: "TN", name: "Tunisia", dial: "+216" },
    { code: "TR", name: "Turkey", dial: "+90" },
    { code: "TM", name: "Turkmenistan", dial: "+993" },
    { code: "TC", name: "Turks and Caicos Islands", dial: "+1-649" },
    { code: "TV", name: "Tuvalu", dial: "+688" },
    { code: "VI", name: "U.S. Virgin Islands", dial: "+1-340" },
    { code: "UG", name: "Uganda", dial: "+256" },
    { code: "UA", name: "Ukraine", dial: "+380" },
    { code: "AE", name: "United Arab Emirates", dial: "+971" },
    { code: "GB", name: "United Kingdom", dial: "+44" },
    { code: "US", name: "United States", dial: "+1" },
    { code: "UY", name: "Uruguay", dial: "+598" },
    { code: "UZ", name: "Uzbekistan", dial: "+998" },
    { code: "VU", name: "Vanuatu", dial: "+678" },
    { code: "VA", name: "Vatican", dial: "+379" },
    { code: "VE", name: "Venezuela", dial: "+58" },
    { code: "VN", name: "Vietnam", dial: "+84" },
    { code: "WF", name: "Wallis and Futuna", dial: "+681" },
    { code: "EH", name: "Western Sahara", dial: "+212" },
    { code: "YE", name: "Yemen", dial: "+967" },
    { code: "ZM", name: "Zambia", dial: "+260" },
    { code: "ZW", name: "Zimbabwe", dial: "+263" }
];

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose, jobTitle = "", availableJobs }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState("IN");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedRole, setSelectedRole] = useState(jobTitle || "");
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Close on escape key
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (isSubmitted) {
                    onClose();
                    setIsSubmitted(false);
                } else {
                    onClose();
                }
            }
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose, isSubmitted]);

    // Reset submission state when modal re-opens
    React.useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setFileName(null);
            setName("");
            setEmail("");
            setPhone("");
            setSelectedRole(jobTitle || "");
            setResumeFile(null);
        }
    }, [isOpen, jobTitle]);

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
            setResumeFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFileName(e.dataTransfer.files[0].name);
            setResumeFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Create FormData
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', `${countryCodes.find(c => c.code === countryCode)?.dial} ${phone}`);
        formData.append('role', selectedRole);
        if (resumeFile) {
            formData.append('resume', resumeFile);
        }

        try {
            const response = await fetch('/api/jobs/apply', {
                method: 'POST',
                body: formData,
            });

            let result;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                result = await response.json();
            } else {
                const text = await response.text();
                console.error("Server API Error:", text);
                throw new Error(`Server returned ${response.status}. Check console for details.`);
            }

            if (response.ok) {
                // Success!
                // alert(`✅ Application submitted! Reference: ${result.reference}`);
                setIsSubmitted(true);
            } else {
                // Error
                alert(`❌ Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('❌ Network error. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div
                className="relative bg-white w-full max-w-[496px] max-h-[90vh] rounded-[24px] shadow-2xl border border-[#3C8ECB] overflow-hidden flex flex-col"
            >
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col h-full overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-white px-8 py-6 border-b border-[#E5E7EB] flex-shrink-0 flex justify-between items-start z-10">
                                <div>
                                    <h2 className={`${inter.className} font-bold text-[24px] leading-[32px] text-black`}>
                                        Join <span style={{
                                            background: 'linear-gradient(90.73deg, #000000 -901.86%, #3C8ECB -369.69%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            color: '#3C8ECB'
                                        }}>Our Team</span>
                                    </h2>
                                    <p className={`${inter.className} text-[14px] leading-[20px] text-[#4B5563] mt-1`}>
                                        Submit your application below for our open positions
                                    </p>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="text-black transition-colors hover:text-gray-600"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                </button>
                            </div>

                            <div className="overflow-y-auto flex-1 pr-2 mr-1 scroll-smooth [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:my-4 [&::-webkit-scrollbar-thumb]:bg-[#D2D5DA] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#9CA3AF]">
                                {/* Form Content */}
                                <form className="p-8 flex flex-col gap-6" onSubmit={handleSubmit}>

                                    {/* Full Name */}
                                    <div className="flex flex-col gap-[9px]">
                                        <label className={`${inter.className} text-[14px] font-medium leading-[20px] text-black`}>
                                            Full Name<span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full name goes here"
                                            className={`${inter.className} w-full h-[50px] px-3 bg-[#F9FAFB] border border-[#D2D5DA] rounded-[6px] text-black placeholder:text-[#6D7280] focus:outline-none focus:ring-1 focus:ring-[#3C8ECB]`}
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="flex flex-col gap-[9px]">
                                        <label className={`${inter.className} text-[14px] font-medium leading-[20px] text-black`}>
                                            Email Address<span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email address goes here"
                                            className={`${inter.className} w-full h-[50px] px-3 bg-[#F9FAFB] border border-[#D2D5DA] rounded-[6px] text-black placeholder:text-[#6D7280] focus:outline-none focus:ring-1 focus:ring-[#3C8ECB]`}
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="flex flex-col gap-[10px]">
                                        <label className={`${inter.className} text-[14px] font-medium leading-[20px] text-black`}>
                                            Mobile Number<span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <div className="flex">
                                            <div className="relative flex items-center justify-center bg-[#F9FAFB] border border-r-0 border-[#D2D5DA] rounded-l-[6px] text-black min-w-[80px]">
                                                {/* Visible Display Only */}
                                                <span className={`${inter.className} text-[16px] z-0`}>
                                                    {countryCodes.find(c => c.code === countryCode)?.dial}
                                                </span>

                                                {/* Invisible Native Select for Functionality */}
                                                <select
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option key={c.code} value={c.code}>
                                                            {c.name} ({c.dial})
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 pointer-events-none z-0" />
                                            </div>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Number goes here"
                                                className={`${inter.className} flex-1 h-[50px] px-3 bg-[#F9FAFB] border border-[#D2D5DA] rounded-r-[6px] text-black placeholder:text-[#6D7280] focus:outline-none focus:ring-1 focus:ring-[#3C8ECB]`}
                                            />
                                        </div>
                                    </div>

                                    {/* Position Applied For */}
                                    <div className="flex flex-col gap-[10px]">
                                        <label className={`${inter.className} text-[14px] font-medium leading-[20px] text-black`}>
                                            Position Applied For<span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                className={`${inter.className} w-full h-[50px] px-3 bg-[#F9FAFB] border border-[#D2D5DA] rounded-[6px] text-black appearance-none focus:outline-none focus:ring-1 focus:ring-[#3C8ECB]`}
                                            >
                                                <option value="" disabled>Select position</option>
                                                {availableJobs.map((job) => (
                                                    <option key={job.id} value={job.title}>
                                                        {job.title}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Resume / CV Upload */}
                                    <div className="flex flex-col gap-[10px]">
                                        <label className={`${inter.className} text-[14px] font-medium leading-[20px] text-black`}>
                                            Resume / CV Upload<span className="text-[#6D7280] font-normal ml-1">(Optional)</span>
                                        </label>
                                        <div
                                            className="h-[152px] bg-[#F9FAFB] border border-dashed border-[#D2D5DA] rounded-[6px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={handleDrop}
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <div className="w-[40px] h-[40px] mb-3 text-[#6D7280]">
                                                <Upload className="w-full h-full" />
                                            </div>
                                            <p className={`${inter.className} text-[16px] text-[#6D7280] mb-2`}>
                                                {fileName ? (
                                                    <span className="text-black font-medium">{fileName}</span>
                                                ) : (
                                                    <>Drop here to attach or <span className="text-[#3C8ECB] underline">upload</span></>
                                                )}
                                            </p>
                                            <p className={`${inter.className} text-[12px] text-[#6D7280]`}>
                                                Max size: 5GB
                                            </p>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className={`${inter.className} w-full h-[56px] mt-4 rounded-[8px] text-white font-bold text-[16px] transition-all hover:opacity-90 active:scale-[0.98]`}
                                        style={{
                                            background: 'linear-gradient(89.17deg, #3C8ECB 16.54%, #000000 106.48%)'
                                        }}
                                    >
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center p-12 text-center h-full w-full bg-white relative z-20"
                        >
                            {/* Animated Checkmark */}
                            <div className="relative mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#3C8ECB] to-[#000000] shadow-2xl"
                                >
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <motion.path
                                            d="M20 6L9 17l-5-5"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Decorative pulsing rings */}
                                <motion.div
                                    initial={{ opacity: 0.5, scale: 1 }}
                                    animate={{ opacity: 0, scale: 1.5 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full border border-[#3C8ECB]/30"
                                />
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className={`${inter.className} font-bold text-[28px] leading-[36px] text-[#111827] mb-4`}
                            >
                                Application Submitted<br />Successfully!
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className={`${inter.className} text-[15px] leading-[24px] text-[#6B7280] mb-10 max-w-[380px] mx-auto`}
                            >
                                Thank you for applying to Techfleek. Our recruitment team will review your application and get back to you soon.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full max-w-[320px] flex flex-col gap-3"
                            >
                                <button
                                    onClick={onClose}
                                    className={`${inter.className} w-full h-[52px] rounded-[12px] text-white font-semibold text-[16px] transition-all hover:shadow-lg hover:translate-y-[-1px] active:scale-[0.98]`}
                                    style={{
                                        background: 'linear-gradient(90deg, #3C8ECB, #2A75A8)'
                                    }}
                                >
                                    View More Jobs
                                </button>
                                <button
                                    onClick={onClose}
                                    className={`${inter.className} w-full h-[52px] rounded-[12px] bg-white border border-[#E5E7EB] text-[#374151] font-semibold text-[16px] transition-all hover:bg-gray-50 active:scale-[0.98]`}
                                >
                                    Close
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-16 flex flex-col items-center gap-5"
                            >
                                <p className={`${inter.className} text-[13px] font-medium text-[#9CA3AF] tracking-wide uppercase`}>Follow us for updates</p>
                                <div className="flex gap-4">
                                    {[
                                        { Icon: Linkedin, color: "#0077b5" },
                                        { Icon: Twitter, color: "#1DA1F2" }, // keeping twitter icon for X
                                        { Icon: Github, color: "#24292e" }
                                    ].map(({ Icon, color }, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 transition-all hover:scale-110 hover:shadow-md hover:text-white"
                                            style={{ '--hover-color': color } as React.CSSProperties}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = color;
                                                e.currentTarget.style.borderColor = color;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#F9FAFB';
                                                e.currentTarget.style.borderColor = '#F3F4F6';
                                            }}
                                        >
                                            <Icon className="w-5 h-5 fill-current" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default JobApplicationModal;
