interface ButtonProps {
    text: string;
    path: string
}

export default function Buttonorengage({ text, path }: ButtonProps) {
    return (
        <a href={path} className="text-center text-base font-medium bg-o hover:bg-oh text-white py-2 px-5 rounded-md transition-colors shadow-sm">
            {text}
        </a>
    );
}   
