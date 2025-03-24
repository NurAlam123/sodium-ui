import TickerOne from "@/components/ticker/ticker-one";
import TickerTwo from "@/components/ticker/ticker-two";
import Box from "@/components/ui/Box";

export default function TickerPage() {
  return (
    <main>
      <Box>
        <TickerOne />
      </Box>

      <Box>
        <TickerTwo />
      </Box>
    </main>
  );
}
