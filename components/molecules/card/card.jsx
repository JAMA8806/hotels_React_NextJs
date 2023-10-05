import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import Link from "next/link";

export default function MediaCard({ hotel, snackbar }) {
  const price = "$".repeat(hotel.price);
  const hotelDetail = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className={styles.imageHotel}
        sx={{ height: 140 }}
        image={hotel.photo}
        title={hotel.name}
      />
      <CardContent className={styles.containerInfo}>
        <Typography
          className={styles.titleHotel}
          gutterBottom
          variant="h1"
          component="div">
          {hotel.name}
        </Typography>
        <Typography
          className={styles.descriptionHotel}
          variant="body2"
          color="text.secondary">
          {hotel.description}
        </Typography>
        <Typography
          className={styles.priceHotel}
          variant="body2"
          color="text.secondary">
          Price: {price}
        </Typography>
        <Typography
          className={styles.countryCityHotel}
          variant="body2"
          color="text.secondary">
          Country:{hotel.country}
        </Typography>
      </CardContent>
      <CardActions className={styles.containerButton}>
        <Link href={`detail/${hotel.name}`}>
          <Button
            size="small"
            className={styles.buttonCardHotel}
            onClick={hotelDetail}>
            Más
          </Button>
        </Link>
        <Button
          size="small"
          className={styles.buttonCardHotel}
          onClick={() => snackbar(true)}>
          Reserva
        </Button>
      </CardActions>
    </Card>
  );
}
