import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { mockReceipts } from "@/data/mock-receipts";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet } from "react-native";

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
        {receipt.imageUri && (
          <Image
            source={{ uri: receipt.imageUri }}
            contentFit="contain"
            style={styles.photo}
          />
        )}
        <ThemedText type="subtitle">{receipt.merchant}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {receipt.date}
        </ThemedText>
        {receipt.items.map((item) => (
          <ThemedView key={item.name} style={styles.row}>
            <ThemedText>
              {item.quantity} x {item.name}
            </ThemedText>
            <ThemedText>${(item.price * item.quantity).toFixed(2)}</ThemedText>
            <ThemedText>{receipt.tax}</ThemedText>
            <ThemedText>${receipt.total.toFixed(2)}</ThemedText>
          </ThemedView>
        ))}
        <ThemedView style={styles.buttonRow}>
          <Pressable
            style={[styles.button, styles.editButton]}
            onPress={() => console.log("Edit button pressed")}
          >
            <ThemedText type="smallBold" style={styles.buttonText}>
              {" "}
              Edit{" "}
            </ThemedText>
          </Pressable>
          <Pressable
            style={[styles.button, styles.deleteButton]}
            onPress={() => console.log("Delete button pressed")}
          >
            <ThemedText type="smallBold" style={styles.buttonText}>
              {" "}
              Delete{" "}
            </ThemedText>
          </Pressable>
        </ThemedView>
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
  photo: {
    width: "100%",
    height: 300,
    borderRadius: Spacing.three,
    marginBottom: Spacing.three,
  },
  button: {
    flex: 1,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.three,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#208AEF",
  },
  deleteButton: {
    backgroundColor: "#D64545",
  },
  buttonText: {
    color: "#ffffff",
  },
  buttonRow: {
    flexDirection: "row",
    gap: Spacing.three,
    marginTop: Spacing.four,
  },
});
