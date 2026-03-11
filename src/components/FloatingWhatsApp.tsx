import { motion } from "framer-motion";
import { WhatsAppIcon } from "./BrandIcons";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/8801725129901"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full pl-4 pr-5 py-3 shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all group"
    >
      <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
      <span className="text-sm hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
