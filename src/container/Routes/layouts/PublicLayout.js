import HomePage from "component/HomePage/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AlertMsg from "shared/AlertMsg";
import NotFoundPage from "shared/NotFoundPage";

const PublicLayout = () => {
    return (
        <div className="public">
            <AlertMsg />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default PublicLayout;
