import { CollectionConfig } from 'payload/types';

const Pendaftaran: CollectionConfig = {
  slug: 'pendaftaran',
  labels: {
    singular: 'Pendaftaran',
    plural: 'Pendaftaran',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'asalSekolah', 
      label: 'Asal Sekolah',
      type: 'text',
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Waiting', value: 'waiting' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Accepted', value: 'accepted' },
      ],
      defaultValue: 'waiting',
    },
    {
      name: 'tanggalPendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};

export default Pendaftaran;