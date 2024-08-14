import Breadcrunb from "./breadcrumb";
import { TopNav } from "./topNav";

export const SubLayout = ({ children }) => {

    return (
        <>
            <div className="w-100 subLayout-bg">
                <TopNav />
                <div className='toolbar px-4'>
                    <Breadcrunb />
                </div>
                <div className="m-4">
                    {children}
                </div>
            </div>
        </>
    );
}

export default SubLayout;
