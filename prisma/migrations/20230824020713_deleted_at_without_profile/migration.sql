-- DropForeignKey
ALTER TABLE "Candidacy" DROP CONSTRAINT "Candidacy_personId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_personId_fkey";

-- DropForeignKey
ALTER TABLE "Internship" DROP CONSTRAINT "Internship_personId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_personId_fkey";

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidacy" ADD CONSTRAINT "Candidacy_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
