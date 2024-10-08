export default function  Layout ({children }:{children:React.ReactNode}){
    return (<div>
        <div className="m-4 text-center">
            Extra 20% for new signup for next 2 days
        </div>
        {children}
    </div>);
}