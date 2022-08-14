import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer 5pJ99ru-UbEqXM6f9Iji_TWTcfJC07ZTnYux_XMr-IQacQ1RB020j4-Mk5txlahK7gSRZzBMpu1nTHFqfi9FJ29XiHjVsEhJcnNP-k_UObIQfjloE4JH3EQqzq74YnYx",
	},
});
