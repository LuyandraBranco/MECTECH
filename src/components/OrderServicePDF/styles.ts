import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: "/fonts/inter.ttf",
});

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    height: "auto",
    fontFamily: "Inter",
    borderRadius: 8,
    backgroundColor: "white",
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
    fontSize: 15,
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#414552",
  },
  section: {
    marginBottom: 30,
  },
  bold: {
    fontSize: 15,
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
    fontSize: 15,
    color: "#FF0000",
    fontWeight: "600",
  },
  greenText: {
    fontSize: 15,
    color: "#15BE53",
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 20,
  },
  seetings: {
    width: 84,
    height: 84,
    objectFit: "cover",
  },
  signatureContainer: {
    width: "25%",
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
  signatureLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginTop: 2,
  },
  textSignature: {
    fontSize: 11,
    color: "#414552",
    marginTop: 3,
  },
});
