import { useState } from "react";

const AlertSimpleText = () => {
    const [open, setOpen] = useState(false);
    // output -> type - danger | success | warning
    return (
        <div>
            <div className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4" role="alert">
    <p className="font-bold">
        Danger
    </p>
    <p>
        Battery is low, your phone can&#x27;t take a photo
    </p>
</div>
<div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
    <p className="font-bold">
        Success
    </p>
    <p>
        Congratulations, you are the best player.
    </p>
</div>

<div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4" role="alert">
    <p className="font-bold">
        Be Warned
    </p>
    <p>
        Something not ideal might be happening.
    </p>
</div>

        </div>
    );
};
export { AlertSimpleText };