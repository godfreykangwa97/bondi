"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import {HousesData} from "@/shared/HousesData";
import Link from "next/link";
function HomeItems(){
    const [properties, setProperties] = useState([]);
    const [filter, setFilter] = useState({
        minPrice: '',
        maxPrice: '',
        location: '',
        type: ''
    });

    useEffect(() => {
        // Filter data based on filter state
        const filteredData = HousesData.filter(property => {
            return (
                (!filter.minPrice || parseInt(property.price.replace(/\D/g, '')) >= filter.minPrice) &&
                (!filter.maxPrice || parseInt(property.price.replace(/\D/g, '')) <= filter.maxPrice) &&
                (!filter.location || property.location.toLowerCase().includes(filter.location.toLowerCase())) &&
                (!filter.type || property.type.toLowerCase().includes(filter.type.toLocaleLowerCase()))
            );
        });
        // Limit data to the first 5 items after filtering
        const limitedData = filteredData.slice(0, 10);
        setProperties(limitedData);
    }, [filter]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter(prevFilter => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    const MapItems = properties.map(property => (
        <Link href={`/property/${property.id}`} className="item-card" key={property.id}>
            <div className="item-card-cover">
                <Image src={`/./${property.image}`} alt={`${property.title} - ${property.id}`}
                width={100} height={100}/>
            </div>
            <div className="item-card-content p-1rem">
               <h4>{property.title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="">
                   <div className="heading flex justify-space items-center m-b-1rem">
                       <h3>$ {property.price}</h3>
                       <small className="text-primary">per month</small>
                   </div>
                    <small>{property.type} | {property.location}</small>
                    <Link href={`/property/${property.id}`} className="button view-button m-t-1rem">
                        view
                    </Link>
                </div>
            </div>
        </Link>
    ))
    return(
        <div className="items p-t-5rem p-b-5rem">
            <div className="wrapper">
                <div className="heading flex justify-space items-center m-b-2rem">
                    <div>
                        <input type="text" name="minPrice" placeholder="Min Price:" value={filter.minPrice} onChange={handleFilterChange} />
                    </div>
                    <div>
                        <input type="text" name="maxPrice" placeholder="Max Price:" value={filter.maxPrice} onChange={handleFilterChange} />
                    </div>
                    <div>
                        <input type="text" name="location" placeholder="Location:" value={filter.location} onChange={handleFilterChange} />
                        <select name="location" value={filter.location} onChange={handleFilterChange} hidden>
                            <option>location choice</option>
                            <option value="chilanga">Chilanga</option>
                            <option value="kafue">Kafue</option>
                            <option value="kabwata">Kabwata</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="type"  placeholder="Type:" value={filter.type} onChange={handleFilterChange} />
                    </div>
                </div>
                <div className="items-grid grid repeat-row-5 gap-x-1">
                    <>
                        {MapItems}
                    </>
                </div>
            </div>
        </div>
    )
}
export default HomeItems