"use client";

import { avatar } from "@/assets/images/avatar";
import { seetings } from "@/assets/images/seetings";
import { signature } from "@/assets/images/signature";
import {
  Document,
  Page,
  Text,
  Image as Img,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

interface Item {
  name: string;
  quantity: string;
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
  page: {
    padding: 30,
    fontSize: 12,
    height: "auto",
    position: "relative",
  },
  header: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  textHeader: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  labelHeader: {
    fontSize: 19.39,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#848484",
  },
  img: {
    width: 64.63,
    height: 64.63,
    objectFit: "cover",
    borderRadius: 30,
  },
  title: {
    fontSize: 25.85,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#414552",
  },
  section: {
    marginBottom: 30,
  },
  bold: {
    fontSize: 16.16,
    fontWeight: "bold",
    color: "#414552",
    marginBottom: 10,
  },
  normalText: {
    fontSize: 12.93,
    fontWeight: "500",
    color: "#414552",
    marginBottom: 10,
  },
  observations: {
    fontSize: 12.93,
    marginTop: 10,
  },
  table: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  item: {
    fontSize: 12.93,
    color: "#414552",
  },
  redText: {
    fontSize: 16,
    color: "#FF0000",
    fontWeight: "600",
  },
  greenText: {
    fontSize: 16,
    color: "#15BE53",
    fontWeight: "600",
  },
  line: {
    borderBottom: "1px solid #000",
    marginVertical: 5,
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  seetings: {
    width: 84,
    height: 84,
    objectFit: "cover",
  },
  signatureContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signature: {
    width: 173.4,
    height: 89.19,
    objectFit: "cover",
  },
  textSignature: {
    fontSize: 12.64,
    color: "#414552",
    marginBottom: 1,
  },
});

export function OrderServicePDF({ formData }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.textHeader}>
            <Text style={styles.labelHeader}>Ordem de Serviço</Text>
            <Text style={styles.title}>
              {formData.name || "Nenhuma  Ordem de Serviço fornecida."}
            </Text>
          </View>
          <Img style={styles.img} source={avatar} />
        </View>

        <View style={styles.section}>
          <Text style={styles.bold}>Descrição do Serviço:</Text>
          <Text style={styles.normalText}>
            {formData.description || "Nenhuma descrição fornecida."}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.redText}>Itens Adicionais</Text>
          <View style={styles.table}>
            {formData.additionalItems.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.item}>
                  {item.name}............................................
                  {item.quantity}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.greenText}>Materiais Complementares</Text>
          <View style={styles.table}>
            {formData.complementaryMaterials.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text>
                  {item.name}.........................................
                  {item.quantity}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.bold}>Observações ou Instruções Adicionais:</Text>
          <Text style={styles.observations}>{formData.observations}</Text>
        </View>

        <View style={styles.footer}>
          <Img style={styles.seetings} source={seetings} />
          <View style={styles.signatureContainer}>
            <Img style={styles} source={signature} />
            <Text>Marcelo Timóteo</Text>
            <Text>Mecânico Responsável</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default OrderServicePDF;
