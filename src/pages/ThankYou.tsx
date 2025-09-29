import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown === 0) {
            navigate("/");
        }

        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white px-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-300 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg max-w-xl mb-6">
                Your message has been successfully submitted. <br />
                Our team will reach out to you within{" "}
                <span className="font-semibold text-yellow-300">24–48 business hours</span>.
            </p>

            <p className="mb-6">
                You’ll be redirected to the homepage in{" "}
                <span className="font-semibold">{countdown}</span> seconds...
            </p>

            <button
                onClick={() => navigate("/")}
                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
                Go Now
            </button>
        </div>
    );
};

export default ThankYou;
