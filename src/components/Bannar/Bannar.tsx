import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Bannar = () => {
  return (
    <section
      id="home-bannar"
      className="nrelative nflex nitems-center njustify-center ntext-center nw-full noverflow-hidden npx-4 sm:npx-6 lg:npx-14 nh-[60vh] sm:nh-[70vh] lg:nh-[80vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="nspace-y-5 nmax-w-3xl"
      >
        <h1 className="ntext-3xl sm:ntext-4xl md:ntext-5xl lg:ntext-6xl nfont-extrabold nleading-tight tracking-tight">
          Challenge Yourself, <br />
          <motion.span
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="ntext-blue-500"
          >
            Expand Your Knowledge!
          </motion.span>
        </h1>

        <Label className="ntext-muted-foreground ntext-base sm:ntext-lg">
          Get your answers evaluated by Interview-Appeared faculty
        </Label>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="nmt-6"
        >
          <Button
            variant="default"
            className="nrounded-lg npx-6 ntext-white npy-3 ntext-base nfont-medium"
          >
            Start Learning →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Bannar;
