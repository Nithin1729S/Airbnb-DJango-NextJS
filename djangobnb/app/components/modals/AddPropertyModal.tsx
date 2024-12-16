"use client";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import LoginModal from "./LoginModal";
import CustomButton from "../forms/CustomButton";

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const addPropertyModal = useAddPropertyModal();
  const content=(
    <>
    {currentStep==1?(
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>
          <CustomButton
            label="Next"
            onClick={()=>setCurrentStep(2)}
      />
        </>
    ): (
      <p>Step 2</p>
    )

    }
      
    </>
  )
  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="Add Property"
        content={content}
      ></Modal>
    </>
  );
};

export default AddPropertyModal;
