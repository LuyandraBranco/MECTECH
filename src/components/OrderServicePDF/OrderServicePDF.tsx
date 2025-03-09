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
  PDFViewer,
} from "@react-pdf/renderer";
import { styles } from "./styles";

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

export function OrderServicePDF({ formData }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.textHeader}>
            <Text style={styles.labelHeader}>Ordem de Serviço</Text>
            <Text style={styles.title}>
              {formData.name || "Nenhuma  Ordem de Serviço"}
            </Text>
          </View>
          <Img style={styles.img} source={avatar} />
        </View>

        <View style={styles.section}>
          <Text style={styles.bold}>Descrição do Serviço:</Text>
          <Text style={styles.normalText}>
            {formData.description || "Nenhuma descrição fornecida"}
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
            <View style={styles.signatureLine} />
            <Text style={styles.textSignature}>Marcelo Timóteo</Text>
            <Text style={styles.textSignature}>Mecânico Responsável</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default OrderServicePDF;
