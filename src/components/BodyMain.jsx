import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import Box from "./Box";
import Box1 from "./Box1";

const BodyMain = () => {
  return (
    <div className="w-3/4 bg-[#edf1f5]">
      <Header />

      <div class="grid grid-cols-4 gap-3  p-5 ">
        <Box title={'TOTAL INVOICE GENERATED'} icon={'stripe'} value={9}/>
        <Box title={'TOTAL APPOINTMENTS'} icon={<CalendarMonthIcon/>} value={11} />
        <Box title={'TOTAL PHYSICIANS'} icon={<PersonIcon/>} value={6}/>
        <Box title={'TOTAL PATIENTS'} icon={<PersonIcon/>} value={22}/>
       
       
       
        
        
      </div>

      <Box1/>

      <Footer />
    </div>
  );
};

export default BodyMain;
