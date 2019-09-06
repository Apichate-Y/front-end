<template>
  <v-flex class="mt-1">
    <v-container>
      <v-card max-width="auto" class="mx-auto">
        <div class="teal darken-1 text-center">
          <v-card-title class="title white--text">จัดเวรทำความสะอาด</v-card-title>
        </div>
        <v-container fluid>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="day" label="วัน" outlined class="white--text"></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="typetime" label="ช่วงเวลา" outlined></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select v-model="value" :items="user" chips label="รายชื่อ" multiple outlined></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="หมายเหตุ" outlined></v-text-field>
            </v-col>
          </v-row>

          <div class="text-center">
            <v-btn class="title" color="primary" min-width="110" min-height="40">
              <v-icon left>done</v-icon>บันทึก
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-container>

    <v-container>
      <v-card>
        <div class="teal darken-1 text-center">
          <v-card-title class="title white--text">
            ตารางเวรทำความสะอาด
            <v-spacer></v-spacer>
            <v-text-field
              class="teal lighten-5"
              v-model="search"
              append-icon="search"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        </div>

        <v-data-table :headers="headers" :items="desserts" hide-default-footer :search="search"></v-data-table>
      </v-card>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      day: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"],
      typetime: ["เช้า", "บ่าย", "เย็น"],
      user: [
        "นาย A",
        "นาย B",
        "นาย C",
        "นาย D",
        "นาย E",
        "นาย F",
        "นาย G",
        "นาย H",
        "นาย I",
        "นาย J"
      ],
      search: "",
      headers: [
        {
          text: "ชื่อ",
          align: "left",
          value: "name"
        },
        { text: "วัน", value: "days" },
        { text: "ช่วงเวลา", value: "typetime" }
      ],

      desserts: [
        {
          name: "นาย A",
          days: "วันจันทร์",
          typetime: "เช้า"
        },
        {
          name: "นาย B",
          days: "วันอังคาร",
          typetime: "บ่าย"
        },
        {
          name: "นาย C",
          days: "วันพุธ",
          typetime: "เช้า"
        },
        {
          name: "นาย D",
          days: "วันพฤหัส",
          typetime: "เย็น"
        },
        {
          name: "นาย E",
          days: "วันศุกร์",
          typetime: "บ่าย"
        }
      ]
    };
  }
};
</script>