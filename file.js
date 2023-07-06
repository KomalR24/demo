done
import org.kohsuke.github.*;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CodeContributionController {

    @GetMapping("/repo/{owner}/{repo}/contributions")
    public ResponseEntity<String> calculateCodeContribution(@PathVariable("owner") String owner,
                                                            @PathVariable("repo") String repo) {
        try {
            GitHub github = new GitHubBuilder().build();
            GHRepository repository = github.getRepository(owner + "/" + repo);

            List<GHCommit> commits = repository.listCommits().asList();
            List<Duration> durations = new ArrayList<>();
            int linesOfCodeContributed = 0;
            Instant startTimestamp = null;

            for (GHCommit commit : commits) {
                linesOfCodeContributed += commit.getLinesChanged();

                if (linesOfCodeContributed >= 100) {
                    if (startTimestamp == null) {
                        startTimestamp = commit.getCommitDate().toInstant();
                    }
                    Instant endTimestamp = commit.getCommitDate().toInstant();
                    durations.add(Duration.between(startTimestamp, endTimestamp));

                    linesOfCodeContributed = 0;
                    startTimestamp = null;
                }
            }

            if (durations.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Code contribution not found.");
            }

            double averageDurationSeconds = calculateAverageDuration(durations);
            if (averageDurationSeconds < 0) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while calculating average duration.");
            }

            long hours = (long) (averageDurationSeconds / 3600);
            long minutes = (long) ((averageDurationSeconds % 3600) / 60);
            long seconds = (long) (averageDurationSeconds % 60);

            String timeTaken = String.format("%d hours, %d minutes, %d seconds", hours, minutes, seconds);
            return ResponseEntity.ok("Average time taken to contribute 100 lines of code: " + timeTaken);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while fetching data.");
        }
    }

    private double calculateAverageDuration(List<Duration> durations) {
        if (durations.isEmpty()) {
            return -1; // Return a negative value to indicate an error
        }

        long totalDuration = 0;
        for (Duration duration : durations) {
            totalDuration += duration.getSeconds();
        }
        return (double) totalDuration / durations.size();
    }
}
import org.kohsuke.github.*;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CodeContributionController {

    @GetMapping("/repo/{owner}/{repo}/contributions")
    public ResponseEntity<String> calculateCodeContribution(@PathVariable("owner") String owner,
                                                            @PathVariable("repo") String repo) {
        try {
            GitHub github = new GitHubBuilder().build();
            GHRepository repository = github.getRepository(owner + "/" + repo);

            List<GHCommit> commits = repository.listCommits().asList();
            List<Duration> durations = new ArrayList<>();
            int linesOfCodeContributed = 0;
            Instant startTimestamp = null;

            for (GHCommit commit : commits) {
                linesOfCodeContributed += commit.getLinesChanged();

                if (linesOfCodeContributed >= 100) {
                    if (startTimestamp == null) {
                        startTimestamp = commit.getCommitDate().toInstant();
                    }
                    Instant endTimestamp = commit.getCommitDate().toInstant();
                    durations.add(Duration.between(startTimestamp, endTimestamp));

                    linesOfCodeContributed = 0;
                    startTimestamp = null;
                }
            }

            if (durations.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Code contribution not found.");
            }

            double averageDurationSeconds = calculateAverageDuration(durations);
            if (averageDurationSeconds < 0) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while calculating average duration.");
            }

            long hours = (long) (averageDurationSeconds / 3600);
            long minutes = (long) ((averageDurationSeconds % 3600) / 60);
            long seconds = (long) (averageDurationSeconds % 60);

            String timeTaken = String.format("%d hours, %d minutes, %d seconds", hours, minutes, seconds);
            return ResponseEntity.ok("Average time taken to contribute 100 lines of code: " + timeTaken);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while fetching data.");
        }
    }

    private double calculateAverageDuration(List<Duration> durations) {
        if (durations.isEmpty()) {
            return -1; // Return a negative value to indicate an error
        }

        long totalDuration = 0;
        for (Duration duration : durations) {
            totalDuration += duration.getSeconds();
        }
        return (double) totalDuration / durations.size();
    }
}
import org.kohsuke.github.*;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CodeContributionController {

    @GetMapping("/repo/{owner}/{repo}/contributions")
    public ResponseEntity<String> calculateCodeContribution(@PathVariable("owner") String owner,
                                                            @PathVariable("repo") String repo) {
        try {
            GitHub github = new GitHubBuilder().build();
            GHRepository repository = github.getRepository(owner + "/" + repo);

            List<GHCommit> commits = repository.listCommits().asList();
            List<Duration> durations = new ArrayList<>();
            int linesOfCodeContributed = 0;
            Instant startTimestamp = null;

            for (GHCommit commit : commits) {
                linesOfCodeContributed += commit.getLinesChanged();

                if (linesOfCodeContributed >= 100) {
                    if (startTimestamp == null) {
                        startTimestamp = commit.getCommitDate().toInstant();
                    }
                    Instant endTimestamp = commit.getCommitDate().toInstant();
                    durations.add(Duration.between(startTimestamp, endTimestamp));

                    linesOfCodeContributed = 0;
                    startTimestamp = null;
                }
            }

            if (durations.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Code contribution not found.");
            }

            double averageDurationSeconds = calculateAverageDuration(durations);
            if (averageDurationSeconds < 0) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while calculating average duration.");
            }

            long hours = (long) (averageDurationSeconds / 3600);
            long minutes = (long) ((averageDurationSeconds % 3600) / 60);
            long seconds = (long) (averageDurationSeconds % 60);

            String timeTaken = String.format("%d hours, %d minutes, %d seconds", hours, minutes, seconds);
            return ResponseEntity.ok("Average time taken to contribute 100 lines of code: " + timeTaken);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while fetching data.");
        }
    }

    private double calculateAverageDuration(List<Duration> durations) {
        if (durations.isEmpty()) {
            return -1; // Return a negative value to indicate an error
        }

        long totalDuration = 0;
        for (Duration duration : durations) {
            totalDuration += duration.getSeconds();
        }
        return (double) totalDuration / durations.size();
    }
}

