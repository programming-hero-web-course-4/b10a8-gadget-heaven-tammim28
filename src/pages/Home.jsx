import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
             <Helmet>
                            <title>Gadget Heaven</title>
                        </Helmet>
            <Banner></Banner>

            <div className="grid  gap-4 grid-cols-4 container mx-auto">
                
              <Categories categories={categories}></Categories>

              <Outlet></Outlet>
            
            </div>
        </div>
    );
};

export default Home;