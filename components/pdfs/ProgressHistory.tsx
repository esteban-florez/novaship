'use client'
import { progressStatuses } from '@/lib/translations'
import { type RecruitmentWithRelations } from '@/lib/types'
import { format } from '@/lib/utils/date'
import { type Progress } from '@prisma/client'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    padding: 4,
  },
  section: {
    margin: 4,
    padding: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 2,
  },
  sectionHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'semibold',
  },
  time: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'semibold',
    color: '#525252',
    marginBottom: 2,
  },
  description: {
    marginTop: 4,
  },
  status: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 2,
    fontSize: 14,
    lineHeight: 16,
  },
})

type Props = React.PropsWithChildren<{
  recruitment: RecruitmentWithRelations
  progresses: Progress[]
}>

export const ProgressHistoryPDF = ({ progresses, recruitment }: Props) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.header}>
          <Text>Novaship</Text>
        </View>
        {progresses.map((progress) => {
          const s = progress.hours > 1 ? 's' : ''

          return (
            <View
              key={progress.id}
              style={styles.section}
            >
              <View style={styles.sectionHead}>
                <Text style={styles.title}>
                  {progress.title} - {progress.hours} hora{s}
                </Text>
                <Text style={styles.status}>
                  {progressStatuses[progress.status]}
                </Text>
              </View>
              <Text style={styles.time}>
                Fecha de inicio: {format({ date: progress.startsAt })}
              </Text>
              <Text style={styles.time}>
                Fecha de finalización: {format({ date: progress.endsAt })}
              </Text>
              <Text style={styles.description}>{progress.description}</Text>
            </View>
          )
        })}
      </Page>
    </Document>
  )
}
