
// import React, { useContext, useMemo, useState } from "react";

// import { AuthContext } from "../../Providers/AuthProvider";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Globe,
//   Building2,
//   Sparkles,
//   ShieldCheck,
//   Users,
//   Mail,
//   Phone,
//   Share2,
//   Headset,
//   FileDown,
//   ArrowRight,
// } from "lucide-react";

// /** Small animated number using Framer Motion */
// const AnimatedNumber = ({ value, duration = 1.2 }) => (
//   <motion.span
//     initial={{ opacity: 0, y: 6 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration }}
//   >
//     {value}
//   </motion.span>
// );

// /** Round avatar with safe fallback initials */
// const Avatar = ({ name = "User", src }) => {
//   const initials = useMemo(() => {
//     const n = (name || "User").trim();
//     const parts = n.split(" ");
//     const first = parts[0]?.[0] || "U";
//     const second = parts[1]?.[0] || "";
//     return (first + second).toUpperCase();
//   }, [name]);

//   return (
//     <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-white/60 shadow-xl overflow-hidden bg-gradient-to-br from-[#0A3D91] to-[#08306B] grid place-items-center text-white text-3xl font-semibold">
//       {src ? (
//         <img
//           src={src}
//           alt={`${name}'s profile`}
//           className="w-full h-full object-cover"
//           onError={(e) => { e.currentTarget.src = ""; }}
//         />
//       ) : (
//         <span>{initials}</span>
//       )}
//       <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] tracking-wide rounded-t-md bg-white/80 text-[#0A3D91] font-medium">
//         Member
//       </span>
//     </div>
//   );
// };

// const Profile = () => {
//   const { user } = useContext(AuthContext) || {};
//   const displayName = user?.displayName || user?.name || "Guest";
//   const photoURL = user?.photoURL || "";
//   const email = user?.email || "No email provided";
//   const phone = user?.phoneNumber || user?.phone || "";
//   const referralCode = user?.refCode || user?.uid || "noorvia-user";

//   // NEW: invite copy state
//   const [copied, setCopied] = useState(false);
//   const inviteUrl = `${window.location.origin}/invite/${referralCode}`;

//   const copyInvite = async () => {
//     try {
//       await navigator.clipboard.writeText(inviteUrl);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1500);
//     } catch (e) {
//       // fallback
//       const temp = document.createElement("input");
//       temp.value = inviteUrl;
//       document.body.appendChild(temp);
//       temp.select();
//       document.execCommand("copy");
//       document.body.removeChild(temp);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1500);
//     }
//   };

//     return (
//     <div className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-[#FAF3E0] via-white to-[#F5E6D3]">
//       {/* Professional animated background */}
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute -top-20 -right-28 w-80 h-80 rounded-full blur-3xl bg-[#0A3D91]/12"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       />
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute -bottom-24 -left-20 w-80 h-80 rounded-full blur-3xl bg-[#D0A96A]/12"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.1, delay: 0.1 }}
//       />
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#2E7D32]/8"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2, delay: 0.2 }}
//       />

//       {/* Professional Container */}
//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* Professional Header Section */}
//         <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <motion.div
//             className="bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Professional gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D91]/5 via-transparent to-[#D0A96A]/5 pointer-events-none" />
            
//             {/* Header Content */}
//             <div className="relative z-10">
//               {/* Profile Header */}
//               <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-8">
//                 <div className="flex-shrink-0">
//                   <Avatar name={displayName} src={photoURL} />
//                 </div>
                
//                 <div className="text-center lg:text-left flex-1">
//                   <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
//                     <div className="p-2 rounded-full bg-[#D0A96A]/10">
//                       <Sparkles className="w-5 h-5 text-[#D0A96A]" />
//                     </div>
//                     <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
//                       Welcome, {displayName}
//                     </h1>
//                   </div>
                  
//                   <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
//                     You're viewing your NoorVia profile. Keep your info up to date, explore
//                     services, and connect with partners—securely and professionally.
//                   </p>

//                   {/* Professional Contact Information */}
//                   <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
//                     <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0A3D91]/10 text-[#0A3D91] border border-[#0A3D91]/20 hover:bg-[#0A3D91]/15 transition-all duration-300">
//                       <Mail className="w-4 h-4" />
//                       <span className="text-sm font-medium">{email}</span>
//                     </div>
//                     {phone && (
//                       <a
//                         href={`tel:${phone}`}
//                         className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#D0A96A]/10 text-[#B8945A] border border-[#D0A96A]/30 hover:bg-[#D0A96A]/15 hover:shadow-md transition-all duration-300"
//                       >
//                         <Phone className="w-4 h-4" />
//                         <span className="text-sm font-medium">{phone}</span>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Professional Action Buttons */}
//               <div className="border-t border-[#E5E7EB]/50 pt-6">
//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                   {/* Primary Action */}
//                   <a
//                     href="/contact"
//                     className="group flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#0A3D91] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#08306B] transition-all duration-300 touch-manipulation"
//                   >
//                     <Headset className="w-5 h-5" />
//                     <span className="text-base">Request Consultation</span>
//                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                   </a>

//                   {/* Secondary Actions */}
//                   <div className="flex flex-col sm:flex-row gap-3 flex-1">
//                     <button
//                       onClick={copyInvite}
//                       className="group inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[#0A3D91] border-2 border-[#0A3D91]/20 font-medium hover:bg-[#0A3D91]/5 hover:border-[#0A3D91]/30 transition-all duration-300 relative touch-manipulation"
//                       aria-live="polite"
//                     >
//                       <Share2 className="w-4 h-4" />
//                       <span className="text-sm">Invite Partner</span>
//                       <span className="sr-only">Copy invite link</span>
//                       <motion.span
//                         initial={false}
//                         animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : -6 }}
//                         className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-emerald-600 text-white shadow-lg"
//                       >
//                         Copied!
//                       </motion.span>
//                     </button>

//                     <a
//                       href="/assets/noorvia-brochure.pdf"
//                       download
//                       className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[#0A3D91] border-2 border-[#0A3D91]/20 font-medium hover:bg-[#0A3D91]/5 hover:border-[#0A3D91]/30 transition-all duration-300 touch-manipulation"
//                     >
//                       <FileDown className="w-4 h-4" />
//                       <span className="text-sm">Download Brochure</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Professional Stats & About Section */}
//         <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
//             {/* Professional Stats Card */}
//             <AnimatePresence>
//               <motion.div
//                 className="lg:col-span-1 bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-6 sm:p-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 rounded-full bg-[#2E7D32]/10">
//                     <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
//                   </div>
//                   <h2 className="text-xl font-bold text-[#111827]">Your Impact</h2>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="bg-gradient-to-r from-[#0A3D91]/5 to-[#0A3D91]/10 border border-[#0A3D91]/20 rounded-2xl p-4 text-center">
//                     <div className="text-sm text-[#0A3D91] font-medium mb-1">Active Projects</div>
//                     <div className="text-3xl font-bold text-[#0A3D91]">
//                       <AnimatedNumber value={user?.projectsCount ?? 12} />+
//                     </div>
//                   </div>
                  
//                   <div className="bg-gradient-to-r from-[#D0A96A]/5 to-[#D0A96A]/10 border border-[#D0A96A]/20 rounded-2xl p-4 text-center">
//                     <div className="text-sm text-[#B8945A] font-medium mb-1">Network Partners</div>
//                     <div className="text-3xl font-bold text-[#B8945A]">
//                       <AnimatedNumber value={user?.partnersCount ?? 8} />
//                     </div>
//                   </div>
                  
//                   <div className="bg-gradient-to-r from-[#2E7D32]/5 to-[#2E7D32]/10 border border-[#2E7D32]/20 rounded-2xl p-4 text-center">
//                     <div className="text-sm text-[#2E7D32] font-medium mb-1">Satisfaction Rate</div>
//                     <div className="text-3xl font-bold text-[#2E7D32]">
//                       <AnimatedNumber value={user?.rating ?? 4.9} />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 p-4 bg-gradient-to-r from-[#0A3D91]/5 to-[#D0A96A]/5 border border-[#0A3D91]/15 rounded-2xl">
//                   <p className="text-sm text-[#6B7280] leading-relaxed text-center">
//                     Keep collaborating and updating your portfolio. The more you engage,
//                     the stronger your network becomes.
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Professional About NoorVia Card */}
//             <motion.div
//               className="lg:col-span-2 bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-6 sm:p-8 relative overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#0A3D91]/8 blur-2xl" />
//               <div className="absolute -bottom-14 -left-14 w-44 h-44 rounded-full bg-[#D0A96A]/8 blur-2xl" />

//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 rounded-full bg-[#0A3D91]/10">
//                     <Building2 className="w-5 h-5 text-[#0A3D91]" />
//                   </div>
//                   <h2 className="text-xl font-bold text-[#111827]">About NoorVia</h2>
//                 </div>

//                 <p className="text-base text-[#6B7280] leading-relaxed mb-6">
//                   NoorVia BD is a <span className="font-semibold text-[#111827]">Global Business Solutions</span> company—your
//                   gateway to international markets. We empower entrepreneurs and organizations with
//                   <span className="font-semibold text-[#111827]"> business consultation</span>, <span className="font-semibold text-[#111827]">legal documentation support</span>,
//                   <span className="font-semibold text-[#111827]"> indenting & sourcing</span>, and <span className="font-semibold text-[#111827]">import–export enablement</span>.
//                   Our network-first approach connects local businesses to global platforms, ensuring compliant,
//                   scalable, and strategic growth.
//                 </p>

//                 <div className="grid sm:grid-cols-3 gap-4 mb-6">
//                   <div className="bg-gradient-to-br from-[#0A3D91]/5 to-[#0A3D91]/10 border border-[#0A3D91]/20 rounded-2xl p-4">
//                     <div className="flex items-center gap-2 text-[#0A3D91] font-semibold mb-2">
//                       <Users className="w-4 h-4" />
//                       <span className="text-sm">Consultation & Network</span>
//                     </div>
//                     <p className="text-xs text-[#6B7280] leading-relaxed">
//                       Expert guidance plus curated connections for sustainable growth.
//                     </p>
//                   </div>
                  
//                   <div className="bg-gradient-to-br from-[#D0A96A]/5 to-[#D0A96A]/10 border border-[#D0A96A]/20 rounded-2xl p-4">
//                     <div className="flex items-center gap-2 text-[#B8945A] font-semibold mb-2">
//                       <ShieldCheck className="w-4 h-4" />
//                       <span className="text-sm">Legal & Compliance</span>
//                     </div>
//                     <p className="text-xs text-[#6B7280] leading-relaxed">
//                       Clean documentation and secure pathways for new ventures.
//                     </p>
//                   </div>
                  
//                   <div className="bg-gradient-to-br from-[#2E7D32]/5 to-[#2E7D32]/10 border border-[#2E7D32]/20 rounded-2xl p-4">
//                     <div className="flex items-center gap-2 text-[#2E7D32] font-semibold mb-2">
//                       <Globe className="w-4 h-4" />
//                       <span className="text-sm">Global Sourcing</span>
//                     </div>
//                     <p className="text-xs text-[#6B7280] leading-relaxed">
//                       Quality suppliers and routes across 50+ markets.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <a
//                     href="/products-services"
//                     className="group flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0A3D91] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#08306B] transition-all duration-300 touch-manipulation"
//                   >
//                     <span className="text-sm">Explore Services</span>
//                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                   </a>
//                   <a
//                     href="/contact"
//                     className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#0A3D91] border-2 border-[#0A3D91]/20 font-medium hover:bg-[#0A3D91]/5 hover:border-[#0A3D91]/30 transition-all duration-300 touch-manipulation"
//                   >
//                     <span className="text-sm">Connect With Us</span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Professional CTA Section */}
//         <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
//           <motion.div
//             className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white shadow-2xl border border-white/20 rounded-3xl p-6 sm:p-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
//               <div className="text-center lg:text-left flex-1">
//                 <h3 className="text-xl sm:text-2xl font-bold mb-3">Build with NoorVia</h3>
//                 <p className="text-base text-[#FAF3E0] leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                   Partner with us to scale your business across borders—smartly and securely.
//                 </p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <a
//                   href="/performers-club"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0A3D91] font-semibold hover:bg-[#FAF3E0] transition-all duration-300 touch-manipulation shadow-lg"
//                 >
//                   <span className="text-sm">Join Performers Club</span>
//                 </a>
//                 <a
//                   href="/investor-connect"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 hover:border-white/80 transition-all duration-300 touch-manipulation"
//                 >
//                   <span className="text-sm">Investor Connect</span>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Building2,
  Sparkles,
  ShieldCheck,
  Users,
  Mail,
  Phone,
  Share2,
  Headset,
  FileDown,
  ArrowRight,
} from "lucide-react";

/** Small animated number using Framer Motion */
const AnimatedNumber = ({ value, duration = 1.2 }) => (
  <motion.span
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration }}
  >
    {value}
  </motion.span>
);

/** Round avatar with safe fallback initials */
const Avatar = ({ name = "User", src }) => {
  const initials = useMemo(() => {
    const n = (name || "User").trim();
    const parts = n.split(" ");
    const first = parts[0]?.[0] || "U";
    const second = parts[1]?.[0] || "";
    return (first + second).toUpperCase();
  }, [name]);

  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-white/60 shadow-xl overflow-hidden bg-gradient-to-br from-deep-teal to-mint-green grid place-items-center text-white text-3xl font-semibold font-space-grotesk">
      {src ? (
        <img
          src={src}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = ""; }}
        />
      ) : (
        <span>{initials}</span>
      )}
      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] tracking-wide rounded-t-md bg-white/80 text-deep-teal font-medium font-dm-sans">
        Member
      </span>
    </div>
  );
};

const Profile = () => {
  const { user } = useContext(AuthContext) || {};
  const displayName = user?.displayName || user?.name || "Guest";
  const photoURL = user?.photoURL || "";
  const email = user?.email || "No email provided";
  const phone = user?.phoneNumber || user?.phone || "";
  const referralCode = user?.refCode || user?.uid || "thelebasbuyingint-user";

  // Invite copy state
  const [copied, setCopied] = useState(false);
  const inviteUrl = `${window.location.origin}/invite/${referralCode}`;

  const copyInvite = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      const temp = document.createElement("input");
      temp.value = inviteUrl;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-warm-beige via-white to-light-sky-blue/20">
      {/* Animated background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-28 w-80 h-80 rounded-full blur-3xl bg-deep-teal/12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 w-80 h-80 rounded-full blur-3xl bg-mint-green/12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-deep-teal/8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="py-12 sm:py-16">
          <motion.div
            className="bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/5 via-transparent to-mint-green/5 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Profile Header */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-8">
                <div className="flex-shrink-0">
                  <Avatar name={displayName} src={photoURL} />
                </div>
                
                <div className="text-center lg:text-left flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                    <div className="p-2 rounded-full bg-mint-green/10">
                      <Sparkles className="w-5 h-5 text-mint-green" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-charcoal tracking-tight">
                      Welcome, {displayName}
                    </h1>
                  </div>
                  
                  <p className="text-base sm:text-lg text-charcoal/80 font-dm-sans leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                    You're viewing your THELEBASBUYINGINT profile. Manage your orders, explore services,
                    and connect with our network—securely and professionally.
                  </p>

                  {/* Contact Information */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-deep-teal/10 text-deep-teal border border-deep-teal/20 hover:bg-deep-teal/15 transition-all duration-300">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium font-dm-sans">{email}</span>
                    </div>
                    {phone && (
                      <a
                        href={`tel:${phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-mint-green/10 text-mint-green border border-mint-green/30 hover:bg-mint-green/15 hover:shadow-md transition-all duration-300"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium font-dm-sans">{phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-charcoal/20 pt-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Primary Action */}
                  <a
                    href="/contact"
                    className="group flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-deep-teal text-white font-semibold font-dm-sans shadow-lg hover:shadow-xl hover:bg-deep-teal/90 transition-all duration-300 touch-manipulation"
                  >
                    <Headset className="w-5 h-5" />
                    <span className="text-base">Request Support</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Secondary Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 flex-1">
                    <button
                      onClick={copyInvite}
                      className="group inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-deep-teal border-2 border-deep-teal/20 font-medium font-dm-sans hover:bg-deep-teal/5 hover:border-deep-teal/30 transition-all duration-300 relative touch-manipulation"
                      aria-live="polite"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Invite Partner</span>
                      <span className="sr-only">Copy invite link</span>
                      <motion.span
                        initial={false}
                        animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : -6 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-mint-green text-deep-teal shadow-lg"
                      >
                        Copied!
                      </motion.span>
                    </button>

                    <a
                      href="/assets/thelebasbuyingint-order-guide.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-deep-teal border-2 border-deep-teal/20 font-medium font-dm-sans hover:bg-deep-teal/5 hover:border-deep-teal/30 transition-all duration-300 touch-manipulation"
                    >
                      <FileDown className="w-4 h-4" />
                      <span className="text-sm">Order Guide</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats & Activity Section */}
        <section className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Stats Card */}
            <AnimatePresence>
              <motion.div
                className="lg:col-span-1 bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-mint-green/10">
                    <ShieldCheck className="w-5 h-5 text-mint-green" />
                  </div>
                  <h2 className="text-xl font-bold font-space-grotesk text-charcoal">Your Activity</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-deep-teal/5 to-deep-teal/10 border border-deep-teal/20 rounded-2xl p-4 text-center">
                    <div className="text-sm text-deep-teal font-medium font-dm-sans mb-1">Active Orders</div>
                    <div className="text-3xl font-bold font-space-grotesk text-deep-teal">
                      <AnimatedNumber value={user?.ordersCount ?? 5} />+
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-mint-green/5 to-mint-green/10 border border-mint-green/20 rounded-2xl p-4 text-center">
                    <div className="text-sm text-mint-green font-medium font-dm-sans mb-1">Completed Projects</div>
                    <div className="text-3xl font-bold font-space-grotesk text-mint-green">
                      <AnimatedNumber value={user?.projectsCount ?? 12} />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-deep-teal/5 to-mint-green/5 border border-deep-teal/15 rounded-2xl p-4 text-center">
                    <div className="text-sm text-charcoal/70 font-medium font-dm-sans mb-1">Network Partners</div>
                    <div className="text-3xl font-bold font-space-grotesk text-charcoal">
                      <AnimatedNumber value={user?.partnersCount ?? 8} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-deep-teal/5 to-mint-green/5 border border-deep-teal/15 rounded-2xl">
                  <p className="text-sm text-charcoal/80 font-dm-sans leading-relaxed text-center">
                    Stay engaged with your orders and network. Check your dashboard for updates!
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* About THELEBASBUYINGINT Card */}
            <motion.div
              className="lg:col-span-2 bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-deep-teal/8 blur-2xl" />
              <div className="absolute -bottom-14 -left-14 w-44 h-44 rounded-full bg-mint-green/8 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-deep-teal/10">
                    <Building2 className="w-5 h-5 text-deep-teal" />
                  </div>
                  <h2 className="text-xl font-bold font-space-grotesk text-charcoal">About THELEBASBUYINGINT</h2>
                </div>

                <p className="text-base text-charcoal/80 font-dm-sans leading-relaxed mb-6">
                  THELEBASBUYINGINT is a <span className="font-semibold text-charcoal">Global Garment Solutions</span> company—your
                  gateway to exceptional manufacturing. We specialize in <span className="font-semibold text-charcoal">custom tailoring</span>,
                  <span className="font-semibold text-charcoal"> bulk production</span>, <span className="font-semibold text-charcoal">fabric sourcing</span>,
                  and <span className="font-semibold text-charcoal">quality assurance</span>. Our client-first approach ensures
                  scalable, high-quality garment solutions tailored to your needs.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-deep-teal/5 to-deep-teal/10 border border-deep-teal/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-deep-teal font-semibold font-dm-sans mb-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Tailored Solutions</span>
                    </div>
                    <p className="text-sm text-charcoal/70 font-dm-sans leading-relaxed">
                      Customized garments designed to your specifications.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-mint-green/5 to-mint-green/10 border border-mint-green/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-mint-green font-semibold font-dm-sans mb-2">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Global Reach</span>
                    </div>
                    <p className="text-sm text-charcoal/70 font-dm-sans leading-relaxed">
                      Serving clients across 50+ markets worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services"
                    className="group flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-deep-teal text-white font-semibold font-dm-sans shadow-lg hover:shadow-xl hover:bg-deep-teal/90 transition-all duration-300 touch-manipulation"
                  >
                    <span className="text-sm">Explore Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-deep-teal border-2 border-deep-teal/20 font-medium font-dm-sans hover:bg-deep-teal/5 hover:border-deep-teal/30 transition-all duration-300 touch-manipulation"
                  >
                    <span className="text-sm">Contact Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-center">
          <motion.div
            className="bg-gradient-to-r from-deep-teal to-mint-green text-white shadow-2xl border border-white/20 rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold font-space-grotesk mb-3">Grow with THELEBASBUYINGINT</h3>
            <p className="text-base text-white/90 font-dm-sans leading-relaxed max-w-2xl mx-auto mb-6">
              Partner with us to elevate your garment production—contact us for tailored solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-deep-teal font-semibold font-dm-sans hover:bg-warm-beige hover:shadow-lg transition-all duration-300 touch-manipulation"
            >
              <span className="text-sm">Get Started</span>
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Profile;