"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("79dd598b-7bcd-4016-9d4c-a5f089f5dad7");
    }, []);

    return null;
};