export const hotelData = async ()=>{
  
    try {
      const response = await fetch(
        "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
      ); 
      const hotelsJson = await response.json();
      return hotelsJson; 
      
    } catch (error) {
      console.error("Error on getting the hotels data")
    }

    
}
      