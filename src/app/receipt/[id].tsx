import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { mockReceipts } from "@/data/mock-receipts";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function ReceiptDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const receipt = mockReceipts.find((r) => r.id === id);

  if (!receipt) {
    return (
      <ThemedView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemedText>Receipt not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <ThemedText type="subtitle">{receipt.merchant}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {receipt.date}
        </ThemedText>
        {receipt.items.map((item) => (
          <ThemedView key={item.name} style={styles.row}>
            <ThemedText>
              {item.quantity} x {item.name}{" "}
            </ThemedText>
            <ThemedText>${(item.price * item.quantity).toFixed(2)}</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.two,
  },
});
