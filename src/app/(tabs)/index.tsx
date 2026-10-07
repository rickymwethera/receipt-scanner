import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { mockReceipts } from "@/data/mock-receipts";
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sorted = [...mockReceipts].sort((a, b) => b.date.localeCompare(a.date));

export default function ReceiptsScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Receipts</ThemedText>
        <FlatList
          data={sorted}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{ pathname: "/receipt/[id]", params: { id: item.id } }}
              asChild
            >
              <Pressable>
                <ThemedView type="backgroundElement" style={styles.card}>
                  <ThemedView type="backgroundElement" style={styles.cardLeft}>
                    <ThemedText type="smallBold" numberOfLines={1}>
                      {item.merchant}
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {item.date}
                    </ThemedText>
                  </ThemedView>
                  <ThemedText>{item.total.toFixed(2)}</ThemedText>
                </ThemedView>
              </Pressable>
            </Link>
          )}
          ListEmptyComponent={
            <ThemedText themeColor="textSecondary">
              No receipts found. Scan a receipt to get started.
            </ThemedText>
          }
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, paddingHorizontal: Spacing.three },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Spacing.three,
    borderRadius: Spacing.three,
    marginBottom: Spacing.two,
  },
  cardLeft: {
    flex: 1,
    marginRight: Spacing.three,
  },
});
