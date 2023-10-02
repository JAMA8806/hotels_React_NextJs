export const hotelData = async ()=>{
    const response = await fetch(
      "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
    ); 
    const hotelsJson = await response.json();
    console.log(hotelsJson);
    return hotelsJson; 
    
}
      