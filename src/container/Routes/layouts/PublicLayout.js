import React, { useEffect } from "react";
import { useState } from "react";
import AboutPage from "component/AboutPage/AboutPage";
import HomePage from "component/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import AlertMsg from "shared/AlertMsg";
import NotFoundPage from "shared/NotFoundPage";
import PublicNavbar from "shared/PublicNavbar";
import { ClipLoader } from "react-spinners";
import Footer from "shared/Footer";
import CuisinePage from "component/CuisinePage/CuisinePage";
import ReservationPage from "component/ReservationPage/ReservationPage";
import PrivateDiningPage from "component/PrivateDiningPage/PrivateDiningPage";
const PublicLayout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(false);
        }, 3500);
        return () => clearInterval(interval);
    }, [loading]);

    return (
        <>
            {loading ? (
                <div className="loading-wrapper">
                    <ClipLoader color="red" size={150} loading={loading} />
                </div>
            ) : (
                <div className="public">
                    <AlertMsg />
                    <PublicNavbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/cuisine" element={<CuisinePage />} />
                        <Route path="/reservation" element={<ReservationPage />} />
                        <Route path="/private-dining" element={<PrivateDiningPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default PublicLayout;
