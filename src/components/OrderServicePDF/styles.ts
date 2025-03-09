import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
    family: 'Inter',
    src: '/fonts/inter.ttf',
  });

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    height: "auto",
    position: "relative",
    fontFamily: "Inter",
    overflow: "hidden"
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
