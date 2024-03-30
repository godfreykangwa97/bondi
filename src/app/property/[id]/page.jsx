import CarouselComponentId from "@/container/slides/Id";
import ContactModal from "@/components/modal/ContactModal";

function Page(){
    return(
        <div className="viewing m-t-5rem p-t-5rem p-b-5rem">
           <div className="wrapper">
               <div className="main">
                   <div className="image">
                       <div className="current">
                           <CarouselComponentId/>
                       </div>
                       <div className="thumbs"></div>
                   </div>
                   <div className="details p-t-2rem p-b-2rem">
                       <h3 className="fs-3 fl">Title</h3>
                       <div className="more inline-flex items-centers gap-x-1 text-primary">
                           <span>location</span>
                           <span>rooms</span>
                           <span>color</span>
                           <span>category</span>
                       </div>
                   </div>
                   <div className="other">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque doloribus explicabo iste maxime nihil? Cupiditate ea molestiae nemo nihil ratione repudiandae tempore!</p>
                   </div>
                   <div className="view-end p-t-1rem p-b-1rem">
                       <ContactModal/>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Page