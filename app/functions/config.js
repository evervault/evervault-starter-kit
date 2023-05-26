export const functionCode = `// This Function uses the ‘haversine’ formula to calculate the distance between an
// arbitrary coordinate to the coordinates of New York. The coordinate pair that
// is passed into the Function is encrypted.

exports.handler = async (data, context) => {
    const lat = data.lat;
    const long = data.long;
    const R = 6371; // Radius of Earth in kilometres
    const newYork = { lat: 40.7128, long: 74.006 };

    const φ1 = (lat * Math.PI) / 180; // φ, λ in radians
    const φ2 = (newYork.lat * Math.PI) / 180;
    const Δφ = ((newYork.lat - lat) * Math.PI) / 180;
    const Δλ = ((newYork.long - long) * Math.PI) / 180;

    const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return \`You're currently \${d.toFixed(0)}km from New York!\`;
};`;

export const logsUrl = `https://app.evervault.com/${process.env.NEXT_PUBLIC_TEAM_ID}/${process.env.NEXT_PUBLIC_APP_ID}/logs`;
