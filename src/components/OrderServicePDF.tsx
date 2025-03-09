"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

interface Item {
  name: string;
  quantity: number;
}

interface FormData {
  name: string;
  description: string;
  additionalItems: Item[];
  complementaryMaterials: Item[];
  observations: string;
}

interface Props {
  formData: FormData;
}

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  section: { marginBottom: 10 },
  bold: { fontWeight: "bold" },
  table: { display: "flex", flexDirection: "column", marginTop: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  redText: { color: "red", fontWeight: "bold" },
  greenText: { color: "green", fontWeight: "bold" },
  line: { borderBottom: "1px solid #000", marginVertical: 5 },
});

export function OrderServicePDF({ formData }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{formData.name || "Ordem de Serviço"}</Text>

        <View style={styles.section}>
          <Text style={styles.bold}>Descrição do Serviço:</Text>
          <Text>{formData.description || "Nenhuma descrição fornecida."}</Text>
        </View>

        {formData.additionalItems.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.redText}>Itens Adicionais:</Text>
            <View style={styles.table}>
              {formData.additionalItems.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text>{item.name}</Text>
                  <Text>{item.quantity}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {formData.complementaryMaterials.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.greenText}>Materiais Complementares:</Text>
            <View style={styles.table}>
              {formData.complementaryMaterials.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text>{item.name}</Text>
                  <Text>{item.quantity}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.bold}>Observações:</Text>
          <Text>
            {formData.observations || "Nenhuma observação adicionada."}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default OrderServicePDF;
