import { Button } from "@/components/ui/button";
import { useState } from "react";
import TestOrQuizAlert from "./TestOrQuizAlert";
import { IoMdAdd } from '@/assets/Icons'
const Header = () => {
  const [open, setOpen] = useState(false)
  const onShowAlertDialog = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return <div className=" nflex njustify-between nitems-center nw-full np-4 nborder-b nborder-secondary">
    <h4>Welcome To Admin Dashboard</h4>
    <div className="nflex nitems-center">
      <Button title="Add Test series or quiz" variant={"destructive"} size={"sm"} className="nflex !nbg-brand ngap-2" onClick={onShowAlertDialog}><IoMdAdd size={22} color="white" /></Button>
    </div>
    <TestOrQuizAlert open={open} onClose={onClose} />
  </div>
};

export default Header;
